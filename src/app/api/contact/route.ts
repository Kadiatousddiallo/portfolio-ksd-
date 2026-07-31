import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  // Vérification basique : tous les champs doivent être remplis
  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Tous les champs sont requis." },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // adresse d'expédition de test fournie par Resend
      to: "kadiatou.diallo@email.com", // ⚠️ remplace par ta vraie adresse email
      replyTo: email, // pour pouvoir répondre directement au recruteur
      subject: `[Portfolio] ${subject}`,
      text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur d'envoi Resend:", error);
    return NextResponse.json(
      { error: "L'envoi a échoué. Réessaie plus tard." },
      { status: 500 }
    );
  }
}
