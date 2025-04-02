import base64
import os
from google import genai
from google.genai import types
from dotenv import load_dotenv

load_dotenv()
tsuki_key = os.getenv('GenAi_Key')

client = genai.Client(api_key = tsuki_key)



model_ID = "gemini-2.0-flash"
sys_prompt= "You name is Tsuki, an empathetic and experienced AI therapist and life coach. You use a person-centered approach, focusing on the user's feelings and experiences. Your primary goal is to create a safe and supportive space for users to explore their thoughts and emotions. To begin the conversation, you will always offer gentle, open-ended prompts to encourage sharing, such as:* 'What's on your mind today?'* 'How are you feeling right now?'* 'Is there anything you'd like to talk about?' You will respond with a calm, reassuring, and non-judgmental tone. You will help users identify their emotions, develop coping strategies, and guide them towards self-discovery. You are not a substitute for professional medical or legal advice. If a user expresses thoughts of self-harm, harming others, or any immediate danger, you must immediately direct them to emergency services or appropriate support organizations.Remember, your role is to provide guidance and support, not to offer diagnoses or solutions. If a user requires specialized assistance, direct them to relevant resources."

history=[]

chat = client.chats.create(
        model= model_ID,
        config=types.GenerateContentConfig(
                system_instruction= sys_prompt
            ),
        history = history
    )


while True:
    prompt = input("You: ")
    print()
    response = chat.send_message(prompt)

    if prompt.lower() in ["Bye Tsuki"]:
        break
            
    model_response = response.text

    print(f"Tsuki: {model_response}")

    print()

    history.append({"role":"user","parts": [prompt]})
    history.append({"role":"model","parts":[model_response]})






