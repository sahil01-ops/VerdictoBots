from typing import Any, Text, Dict, List
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher


class ActionProvideLiveStreamingLink(Action):

    def name(self) -> Text:
        return "action_provide_live_streaming_link"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        # Get the 'state' slot value
        state = tracker.get_slot("state")

        # Define the available state links
        links = {
            "Gujarat": "https://gujarathighcourt.nic.in/streamingboard/",
            "Guwahati": "https://ghconline.gov.in/index.php/live-streaming-of-court-proceedings-1/",
            "Jharkhand": "https://jharkhandhighcourt.nic.in/live-streaming-courts-proceeding",
            "Karnataka": "https://www.youtube.com/c/HighCourtofKarnatakaOfficial",
            "Madhya Pradesh": "https://www.youtube.com/channel/UCCIVFftzmBqzBKoijOmIl1A",
            "Orissa": "https://www.youtube.com/channel/UCtTgN30THhZfQ6sQ_v3KBHQ",
            "Patna": "https://www.youtube.com/channel/UCvb5s5UdLjpaiDpBeaCxVEw"
        }

        # Check if the state is valid and get the corresponding link
        if state in links:
            link = links[state]
            dispatcher.utter_message(text=f"You can watch the live streaming for {state} High Court here: {link}")
        else:
            # If the state is invalid, provide a fallback message
            dispatcher.utter_message(text="Please choose from the available states: Gujarat, Guwahati, Jharkhand, "
                                          "Karnataka, Madhya Pradesh, Orissa, Patna.")

        return []
