"use client";

import { api } from "@/trpc/react";

const CRUDDemo = () => {
  const [data] = api.demoRouter.publicProcedureDemo.useSuspenseQuery({
    text: "???",
  });
  console.log(data.greeting);

  const onClickCreate = async () => {};

  const onClickUpdate = () => {
    console.log("onClickUpdate");
  };

  const onClickRead = () => {
    console.log("onClickRead");
  };

  const onClickDelete = () => {
    console.log("onClickDelete");
  };

  return (
    <>
      <button onClick={onClickCreate}>create</button>
      <button onClick={onClickUpdate}>update</button>
      <button onClick={onClickRead}>read</button>
      <button onClick={onClickDelete}>delete</button>
    </>
  );
};

export default CRUDDemo;
