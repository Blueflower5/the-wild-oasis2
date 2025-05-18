import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin, updateCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow";

function CreateCabinForm({ cabinToEdit = {}, onClose }) {
  const isEditSession = Boolean(cabinToEdit.id);

  const { register, handleSubmit, reset, getValues, formState, setValue } =
    useForm({
      defaultValues: isEditSession
        ? {
            ...cabinToEdit,
            image: undefined, // Don't prefill file input
          }
        : {},
    });
  const { errors } = formState;
  const queryClient = useQueryClient();
  // Use a different mutation for editing
  const mutationFn = isEditSession ? updateCabin : createCabin;
  const { mutate, isLoading } = useMutation({
    mutationFn,
    onSuccess: () => {
      toast.success(isEditSession ? "Cabin updated" : "Cabin created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
      if (onClose) onClose();
    },
    onError: (err) => toast.error(err.message),
  });
  function onSubmit(data) {
    if (isEditSession) {
      mutate({ id: cabinToEdit.id, ...data });
    } else {
      mutate({ ...data, image: data.image[0] });
    }
  }
  function onError(error) {
    // console.log(error);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isLoading}
          {...register("name", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Maximum Capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isLoading}
          {...register("maxCapacity", {
            required: "This field is required",
            min: { value: 1, message: "Capacity should be at least 1" },
          })}
        />
      </FormRow>

      <FormRow label="Regular Price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isLoading}
          {...register("regularPrice", {
            required: "This field is required",
            min: { value: 1, message: "Price should be at least 1" },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isLoading}
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than regular price",
          })}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        // disabled={isCreating} (jonas did this but i didnt)

        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          disabled={isLoading}
          defaultValue=""
          {...register("description", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Cabin photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isLoading}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
