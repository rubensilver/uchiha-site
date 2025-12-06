import InboxList from "@/components/chat/InboxList";

export default function ChatInboxPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Mensagens</h1>
      <InboxList />
    </div>
  );
}
