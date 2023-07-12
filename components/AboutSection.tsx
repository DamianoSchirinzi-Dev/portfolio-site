export default function AboutSection() {
  const faqData = [
    {
      question: "Who am I?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus dui eu magna mattis facilisis non sed arcu. In eget neque    maximus, fringilla nibh a, blandit augue. Sed non commodo nulla.Aenean vel leo tincidunt, sagittis ex ut, hendrerit dolor. Fusce    ligula dolor, lobortis eu erat eget, ultrices rutrum nisl.Phasellus vitae turpis sapien",
    },
    {
      question: "What do I know?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus dui eu magna mattis facilisis non sed arcu. In eget neque    maximus, fringilla nibh a, blandit augue. Sed non commodo nulla.Aenean vel leo tincidunt, sagittis ex ut, hendrerit dolor. Fusce    ligula dolor, lobortis eu erat eget, ultrices rutrum nisl.Phasellus vitae turpis sapien",
    },
    {
      question: "What are my hobbies?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus dui eu magna mattis facilisis non sed arcu. In eget neque    maximus, fringilla nibh a, blandit augue. Sed non commodo nulla.Aenean vel leo tincidunt, sagittis ex ut, hendrerit dolor. Fusce    ligula dolor, lobortis eu erat eget, ultrices rutrum nisl.Phasellus vitae turpis sapien",
    },
    {
      question: "Recent Updates?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus dui eu magna mattis facilisis non sed arcu. In eget neque    maximus, fringilla nibh a, blandit augue. Sed non commodo nulla.Aenean vel leo tincidunt, sagittis ex ut, hendrerit dolor. Fusce    ligula dolor, lobortis eu erat eget, ultrices rutrum nisl.Phasellus vitae turpis sapien",
    },
  ];

  return (
    <div className="flex flex-col gap-20 py-24 bg-custom_dark_2">
      {faqData.map((item, index) => (
        <div key={index} className="grid grid-cols-2">
          <h1 className="flex justify-start col-span-1 pl-40 text-5xl font-bold">{item.question}</h1>
          <p className="flex justify-center w-3/4 col-span-1 justify-center1">{item.answer}</p>
        </div>
      ))}
    </div>
  );
}
