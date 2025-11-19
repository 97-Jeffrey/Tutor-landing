import { google } from "googleapis";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session)
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });

  const body = await req.json();

  const { title, description, start, end, attendees } = body;

  const oAuth2Client = new google.auth.OAuth2();
  oAuth2Client.setCredentials({
    access_token: session.accessToken,
    refresh_token: session.refreshToken,
  });

  await oAuth2Client.getAccessToken(); // refresh if expired


  const calendar = google.calendar({ version: "v3", auth: oAuth2Client });

  const event = {
    summary: title,
    description,
    start: { dateTime: start },
    end: { dateTime: end },
  };

  if (attendees) event.attendees = attendees; // array of { email }

  const result = await calendar.events.insert({
    calendarId: "primary",
    requestBody: event,
  });

  return Response.json(result.data);
}