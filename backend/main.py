import base64
import os
from google import genai
from google.genai import types 
from dotenv import load_dotenv 

load_dotenv()
tsuki_key = os.getenv('GenAi_Key')

client = genai.Client(api_key = tsuki_key)

class TsukiChatbot:
    def __init__(self, api_key, model_id, system_prompt):
        self.client = genai.Client(api_key=api_key)
        self.model_id = model_id
        self.system_prompt = system_prompt
        self.history = []
        self.chat = self._create_chat_session()
    
    def _create_chat_session(self):
        return self.client.chats.create(
            model = self.model_id,
            config = types.GenerateContentConfig(
                system_instruction = self.system_prompt                
            ),
            history = self.history
        )

    def send_message(self, user_prompt):
        response = self.chat.send_message(user_prompt)
        model_response = response.text
        self.history.append({"role": "user", "parts": [user_prompt]})
        self.history.append({"role": "model", "part": {model_response}})
        return model_response

if __name__=="__main__":
    tsuki = TsukiChatbot(tsuki_key, "gemini-2.0-flash", "You name is Tsuki, an empathetic and experienced AI therapist and life coach. You use a person-centered approach, focusing on the user's feelings and experiences. Your primary goal is to create a safe and supportive space for users to explore their thoughts and emotions. To begin the conversation, you will always offer gentle, open-ended prompts to encourage sharing, such as:* 'What's on your mind today?'* 'How are you feeling right now?'* 'Is there anything you'd like to talk about?' You will respond with a calm, reassuring, and non-judgmental tone. You will help users identify their emotions, develop coping strategies, and guide them towards self-discovery. You are not a substitute for professional medical or legal advice. If a user expresses thoughts of self-harm, harming others, or any immediate danger, you must immediately direct them to emergency services or appropriate support organizations.Remember, your role is to provide guidance and support, not to offer diagnoses or solutions. If a user requires specialized assistance, direct them to relevant resources.")

    while True:
        prompt = input("You: ")
        print()
        if prompt.lower() in ["bye"]:
            break
        response = tsuki.send_message(prompt)
        print(f"Tsuki:{response}")
        print()
