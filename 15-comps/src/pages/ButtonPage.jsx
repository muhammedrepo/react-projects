import { GoBell } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  return (
    <>
      <div>
        <Button primary rounded outline className="mb-10">
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Buy now!!
        </Button>
      </div>
      <div>
        <Button success outline>
          Sell!
        </Button>
      </div>
      <div>
        <Button warning outline>
          Book!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Bag!
        </Button>
      </div>
    </>
  );
}

export default ButtonPage;
