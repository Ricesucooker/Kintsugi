#for relation
from config import db

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key= True)
    contact_name= db.column(db.String(80), unique =False, nullable=False)
    email= db.column(db.String(120), unique =True, nullable=False)

    def to_json(self):
        return{
            "id": self.id,
            "contactName": self.contact_name,
            "email": self.email,
        }
    
