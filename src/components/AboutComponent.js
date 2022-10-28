import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Media,
} from "reactstrap";
import { Link } from "react-router-dom";

function About(props) {
  const partners = props.partners.map((partner) => {
    return (
      <Media tag="li" key={partner.id}>
        <RenderPartner partner={partner} />
      </Media>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>About Us/ብዛዕባ'ዚ ድረ-ገጽ</BreadcrumbItem>
          </Breadcrumb>
          <h2>About Us/ብዛዕባ'ዚ ድረ-ገጽ</h2>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-sm-6">
          <h3>
            Our Mission/<strong>ዕላማ'ዚ ወብሳይት</strong>
          </h3>
          <p>
            ኣብ መላእ ዓለም ንዝርከቡ ኦርቶዶክሳውያን ዝኸውን ናይ ህይወት መግቢ ንክምግብ ዝተዳለወ ኢዩ። ምንም'ኳ
            እኹል ዝኾነ መጽሓፍ ቅዱስ ኣብ ኢድ እንተሃለወ ፥ ምስ እዚ ዘሎ ናይ ቴክኖሎጊ ዘመን፥ ኣብ ዝኾነ ቦታ ኮይኑ
            ኣገልግሎት ምእንቲ ክረክብ ተባሂ ዝተዳለወ ኢዩ።
          </p>
        </div>
        <div className="col-sm-6">
          <Card>
            <CardHeader className="bg-success text-white">
              <h3>About the page/ብዛዕባ'ዚ ገጽ</h3>
            </CardHeader>
            <CardBody>
              <dl className="row">
                <dt className="col-6">Founded</dt>
                <dd className="col-6">September 25, 2021</dd>
              </dl>
            </CardBody>
          </Card>
        </div>
        <div className="col">
          <Card className="bg-light mt-3">
            <CardBody>
              <blockquote className="blockquote">
                <p className="mb-3">
                  ትንሣኤን፡ ህይወትን ኣነ እየ። እቲ በኣይ ዝኣምን ናይ ዘልዓለም ህይወት ኣላቶ!!!{" "}
                </p>
                <footer className="blockquote-footer">
                  John the Evangelist, <br />
                  <cite title="Source Title">ወንጌላዊ ቅዱስ ዮሓንስ - 11፡ 25</cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h3>Church Partners</h3>
        </div>
        <div className="col mt-4">
          <Media list>{partners}</Media>
        </div>
      </div>
    </div>
  );
}

function RenderPartner({ partner }) {
  if (partner) {
    return (
      <>
        <Media object src={partner.image} alt={partner.name} width="150" />
        <Media body className="ml-5 mb-4">
          <Media heading>{partner.name}</Media>
          {partner.description}
        </Media>
      </>
    );
  }
}

export default About;
