async function test2 = async () => {
  let vlaue = await 1;
  console.log(vlaue);
  vlaue = await Promise.resolve(1);
  console.log(vlaue);
};