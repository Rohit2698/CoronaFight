const Questions = [
  {
    "question": "How old are you",
    "option": { "Under 18": 1, "18-64": 2, "65-older": 3 },
    "type":"radio"
  },
  {  
    "question": "Do you have any of following symptoms",
    "option": {
      "Fever,chill or sweating": 2,
      "Shortness of breath": 2,
      "Cough": 2,
      "Soe Throat": 2,
      "Aching Throughout the body": 2,
      "Vomit or diarrhea": 2,
    },
    "type":"checkbox"
  },
  {  
    "question": "Do you have any of historical disease or other conditions",
    "option": {
      "Asthma or lung disease": 2,
      "Pregnancy": 2,
      "Diabetes": 2,
      "Diseases or conditions that make it harder to cough": 2,
      "Needs dialysis": 2,
      "Cirrhosis": 2,
      "Weakend Immune system":2,
      "Heart failure":2,
      "Extreme Obesity":2
    },
    "type":"checkbox"
  },
  {  
    "question": "In the last 2 Weeks,have you travelled internationally",
    "option": {
      "I have travelled internationally": 2,
      "I have not travelled internationally": 0
    },
    "type":"radio"
  },
  {  
    "question": "In the last 2 Weeks,have you been live or visit a place where COVID-19 is spreading",
    "option": {
      "I live in where COVID-19 is spreading": 2,
      "I have visited an area where COVID-19 is spreading": 2
    },
    "type":"checkbox"
  },
  {  
    "question": "In the last 2 Weeks,What is your exposure to otherswho are known to have COVID-19?",
    "option": {
      "I live with someone who has COVID-19": 2,
      "I've had touch with someone who has COVID-19.(For 10 min,I exposed in 2 meter of someone who's sick,cough or sneeze": 2,
      "I've been near someone who has COVID-19.(At least 2 meters away and was not exposed to sneeze or cough":2
    },
    "type":"checkbox"
  }
];

export default Questions;