import { FC } from "react";
import { useIntl } from "react-intl";
import { KTSVG } from "../../../../../helpers";
import { Modal } from "react-bootstrap";

type PopupProps = {
  show: boolean;
  handleClose: any;
};
export const NewFeasibilityStudyPopup: FC<PopupProps> = ({
  show,
  handleClose,
}) => {
  const intl = useIntl();

  return (
    // <div className="modal-dialog modal-dialog-centered mw-1000px">
    //   <div className="modal-content">
    //     <div className="modal-header justify-content-end border-0 pb-0">
    //       <div
    //         className="btn btn-sm btn-icon btn-active-color-primary"
    //         data-bs-dismiss="modal"
    //       >
    //         <KTSVG
    //           path="/media/icons/duotune/arrows/arr061.svg"
    //           className="svg-icon-1"
    //         />
    //       </div>
    //     </div>
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      // aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="card">
        {/* <div className="card-body mx-5"> */}
        <Modal.Header
          closeButton
          // className="flex-column-reverse"
          style={{
            alignItems: intl.locale == "ar" ? "flex-start" : "center",
            flexDirection: intl.locale == "en" ? "column-reverse" : "row",
          }}
          className="pb-0 border-bottom-0"
          // className="align-items-start"
        >
          <div className="card-header mt-10 d-flex justify-content-center w-100 px-4 border-bottom-0">
            <Modal.Title id="contained-modal-title-vcenter">
              <h3 className="card-title flex-column align-items-center">
                <span className="card-label fw-bolder fs-3 mb-2 ">
                  دليل إسترشادي
                </span>
                <span className="mt-1 fw-semibold fs-5 text-muted">
                  دليل إسترشادي لكراسه الشروط
                </span>
              </h3>
            </Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body className="pb-0 mx-4">
          <div className="row">
            <div className="col-12">
              اكتسبت اللغة العربية الجمال والإبداع من جمال حروفها عندما تُنطق
              وتُسمع وتُكتب، فعندما تكتب بالخط العربي فلا بدّ من لمسة فنية تزين
              أحرفها من زخارف، ونقوش، وحركات التشكيل كما تظهر في القرآن الكريم،
              أو تزين بها المساجد، أو كما ترسم في الكتب والصحف، وعلى بعض أنواع
              المجوهرات والحُليّ،[٣] عندما تتحرك بها الألسن تتجلى فيها البلاغة
              والفصاحة والصور البديعية، والكثير من المعاني، وهذا ما يتميز به
              القرآن الكريم الذي عندما نزل تحدى العرب، وخصوصاً قريش في البلاغة
              والفصاحة، وهذا ما تعجب منه فصحاء قريش عندما سمعوا تلاوة القرآن
              الكريم.[٤] يظهر جمال اللغة العربية في الشعر، والنثر، والخطابة،
              والقصة، والرواية، وفي النحو، والصرف، حيث يعتبر الشعر فناً أدبياً
              أقبل عليه الكثير من الشعراء الذي برعوا في كافة ألوان الشعر من غزل،
              ومدح، وذم، ورثاء، ومن أبرز شعراء العربية هم شعراء المعلقات السبع،
              والمتنبي، وأحمد شوقي، وأبو القاسم الشابي، فكل هؤلاء برعوا بالبلاغة
              وجزالة اللفظ والمعنى باستخدام القافية أو بحور الشعر، والمحسنات
              البديعية التي تضفي لمسة جميلة تطرب الآذان، فاللغة العربية هي لغة
              مرنة تعايشت مع كل الأزمان ومختلف الأجناس، ومن جمالها أيضاً أنّ
              المرء يستطيع أن يعبر عما بداخله بشكل صريح ومباشر أو بالتلميح. إقرأ
              المزيد على موضوع.كوم
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="w-100 justify-content-center pb-10 pt-2 border-top-0">
          <div className="mt-5 mb-5 col-12 col-lg-7 mx-auto">
            <div className="outputCard card-diff-toolbar w-100 mt-3 d-flex justify-content-center">
              <div className="d-flex justify-content-center align-items-center w-50">
                <div
                  // data-bs-dismiss="modal"
                  onClick={handleClose}
                  className="btn btn-secondary mx-1 text-center w-100"
                >
                  {intl.formatMessage({ id: "Cancel" })}
                </div>
                <button
                  type="button"
                  // data-bs-dismiss="modal"
                  onClick={(event) => {
                    event.preventDefault();
                    handleClose();
                    // showSuccessAlert();
                  }}
                  className="btn btn-success mx-1 text-center w-100"
                  style={{ border: "none" }}
                >
                  {intl.formatMessage({ id: "Agree" })}
                </button>
              </div>
            </div>
          </div>
        </Modal.Footer>
        {/* </div> */}
      </div>
      {/* //   </div>
    // </div> */}
    </Modal>
  );
};
