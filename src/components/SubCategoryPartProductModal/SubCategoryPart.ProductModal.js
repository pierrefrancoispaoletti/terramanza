import React from "react";
import FormInput from "../FormInput/FormInput";
import { colors } from "../../_const";

const SubCategoryPartProductModal = ({
  setProduct,
  subCategories,
  subCategory,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div
      style={{
        background: colors.tertiary,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
      }}
    >
      {subCategories.map((sub) => (
        <FormInput
          key={sub.slug}
          id={sub.name}
          type="radio"
          name="subCategory"
          checked={subCategory === sub.slug}
          handleChange={handleChange}
          label={sub.name}
          value={sub.slug}
          required
        />
      ))}
    </div>
  );
};

export default SubCategoryPartProductModal;
