import { useState } from 'react';
import useQueryBot from '../hooks/useQueryBot'
import { useQuery } from '@tanstack/react-query';

const Test = () => {
  // נשמור מערך של הודעות
  const [messages, setMessages] = useState<string[]>([]);

  const { isLoading, error, refetch } = useQuery({
    queryKey: ['Query'],
    queryFn: useQueryBot,
    onSuccess: (newData) => {
      console.log('New message received:', newData); // בדוק שהפונקציה פועלת
      setMessages((prev) => [...prev, newData]);
    },
    enabled: false, // לא מפעיל את השאילתה אוטומטית
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error has occurred:</p>;

  return (
    <div>
    <h1>Data from QueryBot:</h1>
    {/* כפתור שמפעיל מחדש את השאילתה */}
    <button onClick={() => refetch()}>בקש הודעה חדשה</button>
    {/* נציג את כל ההודעות שנאספו */}
    <div>
      <h2>Messages:</h2>
      {messages.length > 0 ? (
        messages.map((msg, i) => <p key={i}>{msg}</p>)
      ) : (
        <p>No messages yet. Click the button to fetch messages!</p>
      )}
    </div>
    {/* מציג טעינת נתונים ושגיאות */}
    {isLoading && <p>Loading...</p>}
    {error instanceof Error && <p>Error: {error.message}</p>}
  </div>
  );
}

export default Test;
