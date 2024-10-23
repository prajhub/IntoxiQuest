"use server";

export async function fetchQuestion(questionType: string) {
  try {
    const response = await fetch("http://localhost:3000/api/google", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ type: questionType }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error sending prompt:", response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}
