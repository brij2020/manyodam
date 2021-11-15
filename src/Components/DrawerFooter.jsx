import React from "react";

const DrawerFooter = (props) => {
  const { setIsOpen, isOpen } = props;
  return (
    <div class="modal-footer text-center mt-4 font-weight-light">
      <button  type="submit" class="btn btn-primary">
        Save changes
      </button>
      <button
        type="button"
        class="btn btn-secondary"
        data-dismiss="modal"
        onClick={() => setIsOpen(!isOpen)}
      >
        Close
      </button>
    </div>
  );
};
export default DrawerFooter;
