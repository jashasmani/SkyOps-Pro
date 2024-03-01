import React, { useRef } from "react";
import "./Ticket.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const TicketDownload = () => {
  const passengers = [
    { id: 1, name: "Makwana/Brijesh Mr (ADT)", ticketNumber: "L6T5SF" },
    { id: 2, name: "Parmar / Trushar Mr (ADT)", ticketNumber: "L6T5SF" },
    { id: 3, name: "Patel / Vishal Mr (ADT)", ticketNumber: "L6TSSF" },
    { id: 4, name: "Manat / Bhavesh Mr (ADT)", ticketNumber: "L6T5SF" },
  ];

  const pdfRef = useRef();

  const downloadButton = () => {
    const input = pdfRef.current;

    html2canvas(input).then((canvas) => {
      const pdf = new jsPDF("l", "mm", "a4", true);
      const imgData = canvas.toDataURL("img/png");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = (pdfHeight - imgHeight * ratio) / 2;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("document.pdf");
    });
  };

  return (
    <>
      <section style={{ height: "100vh", overflowY: "scroll" }}>
        <div className="p-3 border border-dark" >
          <div class="d-flex justify-content-end m-2">
            <button
              type="button"
              class="btn btn-secondary"
              onClick={downloadButton}
            >
              Download
            </button>
          </div>
          <div className="border border-dark rounded-5" ref={pdfRef}>
            <div className="d-flexflex-coloumn justify-content-center align-items-center flex-wrap ">
              <h2 className="text-center bg-primary text-white py-2">
                SkyOps Pro
              </h2>
              <h3 className="text-center text-dark py-2">
                Booking Confirmation
              </h3>
            </div>

            <div
              className="alert mx-3 alert-warning important-note"
              role="alert"
            >
              <p className="m-0">
                Please carry a valid identity proof along with this e-ticket. We
                recommend you check-in 2 hours prior to departure.
              </p>
            </div>
            <div className="d-flex justify-content-between mx-2">
              <h6 className="mx-1">Confirmation ID :{" 123456789"}</h6>
              <h6 className="mx-1">Booking Date : {"25/04/2025"}</h6>
            </div>
            <div className="table-responsive-sm mx-3">
              <table className="table mt-3 table-bordered">
                <thead>
                  <tr className="text-center res">
                    <th scope="col" className="res">
                      Sr No.
                    </th>
                    <th scope="col" className="res">
                      Name
                    </th>
                    <th scope="col" className="res">
                      Ticket Number
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {passengers.map((passenger) => (
                    <tr className="text-center res" key={passenger.id}>
                      <td className="res">{passenger.id}</td>
                      <td className="res">{passenger.name}</td>
                      <td className="res">{passenger.ticketNumber}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="container-fluid text-center  ">
              <div className="row mx-1 d-flex justify-content-center">
                <div className="col-12 mt-3 border ">
                  <h3 className="ms-2 ">
                    {"Surat"} to {"Delhi"}{" "}
                    <span style={{ color: "green" }}>(Confirmed)</span>
                  </h3>
                </div>
                <div className="col-12 col-sm-6 col-md-3 mt-3 border ">
                  <h3 className="text-primary">{"IndiGo"}</h3>
                  <h5>{"6E-517"}</h5>
                </div>
                <div className="col-12 col-sm-6 col-md-3 mt-3 border ">
                  <strong>Departure</strong>
                  <h6>{"Delhi (IndiGo Indira Gandhi International, ID)"}</h6>
                </div>
                <div className="col-12 col-sm-6 col-md-3 mt-3 border ">
                  <strong>Arrival</strong>
                  <h6>{"Delhi (IndiGo Indira Gandhi International, ID)"}</h6>
                </div>
                <div className="col-12 col-sm-6 col-md-3 mt-3 border ">
                  <strong>Airline PNR</strong>
                  <h3 className="mb-0">{"6E-L6T5SF"}</h3>
                </div>
              </div>
            </div>
            <div className="container-fluid py-3 ">
              <h2 className="text-primary">FARE BREAKUP</h2>
              <div className="table-responsive ">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td className="fw-bold">Basic Fare:</td>
                      <td>4X1150 Adult,OXO Child,OXO Infant,</td>
                    </tr>

                    <tr>
                      <td className="fw-bold">Total Base Fare:</td>
                      <td>INR 4600</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Total taxes and fees:</td>
                      <td>INR 4480</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Grand Total:</td>
                      <td>INR 9080</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3 className="text-primary">
                Terms and conditions of IndigoAir:
              </h3>
              <div className="px-3">
                <p>
                  {"->"} All Guests, including children and infants, must
                  present valid identification at check-in.
                  <br />
                  {"->"} Check-in begins 2 hours prior to the flight for seat
                  assignment and closes 60 minutes prior to the scheduled
                  departure.
                  <br />
                  {"->"} Carriage and other services provided by the carrier are
                  subject to conditions of carriage, which are hereby
                  incorporated by reference. These conditions may be obtained
                  from the issuing carrier.
                  <br />
                  {"->"} Indian allows its Guests to check-in up to 15 kg of
                  luggage per paying passenger. Baggage in excess of 15 kg is
                  subject to a fee to be paid at the airport at check-in.
                  <br />
                  {"->"} Cancellation Charges shall be as per airline rules.
                  <br />
                  {"->"} For any queries please contact IndiGo at
                  18001803838/9910383838 for all MTNL/BSNL phones.
                  <br />
                  {"->"} Please check the figures/timings as they may change
                  time to time without any notice to the passenger.
                  <br />
                  {"->"} For Delhi-Mumbai Travel Sectors/Customer Needs to
                  recheck the departure and arrival terminals again with the
                  airlines prior 24 hours of flight scheduled timings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TicketDownload;
