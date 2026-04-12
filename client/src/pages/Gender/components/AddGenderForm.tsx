import SubmitButton from "../../../components/Button/SubmitButton";
import FloatingLabelInput from "../../../components/Inputs/FloatingLabelInput";

const AddGender = () => {
  return (
    <>
      <form>
        <div className="mb-4">
          <FloatingLabelInput label="Gender" type="text" name="gender" />
        </div>
        <div>
          <SubmitButton label="Save Gender" />
        </div>
      </form>
    </>
  );
};

export default AddGender;