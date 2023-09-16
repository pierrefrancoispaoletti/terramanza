import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AdminButton,
  AdminButtonBarContainer,
  AdminButtonContainer,
} from "./admin-button-bar.style";
import {
  deleteProduct,
  updateProdut,
} from "../../redux/reducers/Products/querries";
import {
  setProductToEdit,
  toggleModal,
} from "../../redux/reducers/Products/actions";
import { selectCurrentUser } from "../../redux/reducers/User/selector";
import {
  faEdit,
  faEye,
  faEyeSlash,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const AdminButtonBar = ({ _id, product }) => {
  const { token } = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  return (
    <AdminButtonBarContainer>
      <AdminButtonContainer>
        <AdminButton
          type="button"
          onClick={() => {
            dispatch(toggleModal("editer"));
            dispatch(setProductToEdit(product));
          }}
        >
          <FontAwesomeIcon icon={faEdit} size="2x" color="purple" />
        </AdminButton>
      </AdminButtonContainer>
      <AdminButtonContainer>
        <AdminButton
          type="button"
          onClick={() =>
            updateProdut({ _id, visible: !product?.visible }, dispatch, token)
          }
        >
          <FontAwesomeIcon
            icon={product?.visible ? faEye : faEyeSlash}
            size="2x"
            color="grey"
          />
        </AdminButton>
      </AdminButtonContainer>
      <AdminButtonContainer>
        <AdminButton
          type="button"
          onClick={() => deleteProduct(_id, dispatch, token)}
        >
          <FontAwesomeIcon icon={faTrash} size="2x" color="red" />
        </AdminButton>
      </AdminButtonContainer>
    </AdminButtonBarContainer>
  );
};

export default AdminButtonBar;
