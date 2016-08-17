## IBM Watson Personality Insights

This is a simple application that uses IBM Watson to generate personality insights from text analysis. It can be deployed to IBM Bluemix using the manifest file included and binding the Watson Personality Insights service to the application with the following VCAP Services file:

```
{
  "personality_insights": [
    {
      "name": "your-app-name",
      "label": "personality_insights",
      "plan": "tiered",
      "credentials": {
        "url": "https://gateway.watsonplatform.net/personality-insights/api",
        "password": "",
        "username": ""
      }
    }
  ]
}
```

