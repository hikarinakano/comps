import Accordion from "./components/Accordion";

function AccordionPage() {

  const items = [
    {
      id: '123',
      label: "Can i use React on a project?",
      content: 'You can use React on any project you want.You can use React on any project you want.',
    },
    {
      id: '1234',
      label: 'Can i use Javascript on a project?',
      content: 'You can use Javascript on any project you want.You can use React on any project you want.You can use React on any project you want.',
    },
    {
      id: '12345',
      label: 'Can i use CSS a project?',
      content: 'You can use CSS on any project you want.You can use React on any project you want.You can use React on any project you want.',
    },
  ]
  return (<Accordion items={items}/>)
}
export default AccordionPage;