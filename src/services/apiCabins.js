import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log(error);
    throw new Error("cabins could not be loaded");
  }
  return data;
}
export async function createCabin(newCabin) {
  const { data, error } = await supabase
    .from("cabins")
    // our fields name that we submited to the useForm is exactly the name that we defined in cabin so it will work when we just pass cabin as an array.
    .insert([newCabin]);
  if (error) {
    console.log(error);
    throw new Error("cabin could not be created");
  }
  return data;
}
export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("cabin could not be deleted");
  }
  return data;
}
