import React, { useEffect, useState, Component } from "react";
// import web3 from "../ethereum/web3";
import Record from "../ethereum/record";
import { Button, Card } from "semantic-ui-react";
import Layout from "../components/Layout";
import bgImg from "../components/images/newestPic.jpg";
import Image from "next/image";

class showPatient extends Component {
  static async getInitialProps(props) {
    // let address = props.query.address;
    // this.setState({ address: props.query.address });
    // console.log("geu" + this.state.address);
    // const patient = await Record.methods
    //   .getOneRecord()
    //   .call({ from: props.query.address });

    // return {
    //   Id: patient[0][0],
    //   name: patient[0][1],
    //   ailment: patient[0][2],
    //   isViewable: patient.isViewable,
    //   address: address,
    // };

    return {
      address: props.query.address,
    };
  }

  constructor() {
    super();
    this.state = {
      Id: "",
      name: "",
      ailment: "",
      bloodGroup: "",
      phoneNumber: "",
      address: "",
    };
    // this.setTrue = this.setTrue.bind(this);
    // this.setFalse = this.setFalse.bind(this);
  }

  async componentDidMount() {
    const patient = await Record.methods
      .getOneRecord()
      .call({ from: this.props.address });

    console.log(patient);

    this.setState({
      Id: patient[0][0],
      name: patient[0][1],
      ailment: patient[0][2],
      bloodGroup: patient[0][3],
      phoneNumber: patient[0][4],
      address: this.props.address,
    });
  }

  // async setTrue() {
  //   // this({ address: this.props.address });
  //   // console.log("in fun" + showPatient.props);
  //   // console.log("in fun" + this.state.address);
  //   console.log("her2" + this.state.address);

  //   await Record.methods
  //     .setViewableToTrue(true)
  //     .send({ from: this.state.address });

  //   const patient = await Record.methods
  //     .getOneRecord()
  //     .call({ from: this.props.address });
  //   console.log(patient);
  //   this.setState({
  //     Id: patient[0][0],
  //     name: patient[0][1],
  //     ailment: patient[0][2],
  //     isViewable: patient.isViewable,
  //   });
  // }

  // async setFalse() {
  //   // this({ address: this.props.address });
  //   // console.log("in fun" + showPatient.props);
  //   // console.log("in fun" + this.state.address);
  //   console.log("her2" + this.state.address);

  //   await Record.methods
  //     .setViewableToFalse()
  //     .send({ from: this.state.address });

  //   const patient = await Record.methods
  //     .getOneRecord()
  //     .call({ from: this.props.address });
  //   console.log(patient);
  //   this.setState({
  //     Id: patient[0][0],
  //     name: patient[0][1],
  //     ailment: patient[0][2],
  //     isViewable: patient.isViewable,
  //   });
  // }

  renderPatient() {
    const { Id, name, ailment, bloodGroup, phoneNumber } = this.state;

    if (name == "") return;

    const items = [
      {
        header: name,
        meta: "Patient name",
        fluid: true,
        color: "yellow",
        style: { textAlign: "center" },
      },
      {
        header: Id,
        meta: "crypto address of patient",
        style: { overflowWrap: "break-word", textAlign: "center" },
        fluid: true,
        color: "yellow",
        // textAlign: "center",
      },
      {
        header: ailment,
        meta: "Patient problem",
        fluid: true,
        color: "yellow",
        style: { textAlign: "center" },
      },
      {
        header: bloodGroup,
        meta: "Patient's Blood Group",
        fluid: true,
        color: "yellow",
        style: { textAlign: "center" },
      },
      {
        header: phoneNumber,
        meta: "Patient's phone Number",
        fluid: true,
        color: "yellow",
        style: { textAlign: "center" },
      },
      // {
      //   header: "Control Access",
      //   description: isViewable ? (
      //     <Button
      //       primary
      //       onClick={this.setFalse}
      //       content="Make Private"
      //       floated="center"
      //     ></Button>
      //   ) : (
      //     <Button
      //       primary
      //       onClick={this.setTrue}
      //       content="Make Public"
      //       floated="center"
      //     ></Button>
      //   ),
      //   fluid: true,
      //   style: { textAlign: "center" },
      //   color: "yellow",
      // },
    ];

    return (
      <Card.Group style={{ marginTop: "10px" }} items={items}></Card.Group>
    );
  }

  render() {
    return (
      <div>
        <div
          style={{
            zIndex: -1,
            position: "fixed",
            width: "100vw",
            height: "100vh",
          }}
        >
          <Image
            src={bgImg}
            alt="user profile picture"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <Layout></Layout>
        <div style={{ paddingLeft: "350px", paddingRight: "350px" }}>
          {this.renderPatient()}
        </div>
      </div>
    );
  }
}

export default showPatient;
