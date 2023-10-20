import { ponder } from "@/generated";

ponder.on("GTC:Approval", async ({ event, context }) => {
  console.log(event.params);
});

ponder.on("GTC:DelegateChanged", async ({ event, context }) => {
  console.log(event.params);
});
