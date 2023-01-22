import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "erwrr",
      label: "A Stateful Component",
      content:
        "In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render().",
    },
    {
      id: "erwjk",
      label: "An Application",
      content:
        "Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.",
    },
    {
      id: "erwlk",
      label: "A Component Using External Plugins",
      content:
        "React allows you to interface with other libraries and frameworks. This example uses remarkable, an external Markdown library, to convert the <textarea>’s value in real time.",
    },
  ];
  return (
    <div className="container mx-auto p-20">
      <Accordion items={items} />
    </div>
  );
}
export default AccordionPage;
