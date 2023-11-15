import { STRAPI_URL } from "./config";

import { Card, CardHeader, CardBody, CardFooter, Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { FaTrain } from "react-icons/fa6";

async function getOperationTrains() {
  const res = await fetch(`${STRAPI_URL}/operation-trains`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const { data } = await res.json();
  return data;
}

export default async function Home() {
  const operationTrain = await getOperationTrains();

  console.log(operationTrain.data);

  return (
    <section>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 ">
        {" "}
        {operationTrain.map((operationTrain) => (
          <Card key={operationTrain.id} className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col text-center">
              <h4 className="font-bold text-large">
                {operationTrain.attributes.name}
              </h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <FaTrain
                size={170}
                color="#00d4ff"
                className="object-cover rounded-xl"
                shadow="sm"
                radius="lg"
              />
            </CardBody>
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <Button as={Link} color="primary" variant="flat" className="text-tiny text-white bg-black/20" radius="lg" size="sm" href="/station">
          View
        </Button>
      </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
