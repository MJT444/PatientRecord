import React, { Component } from "react";
import Layout from "../components/Layout";
import { Button, Card } from "semantic-ui-react";
import Record from "../ethereum/record";
import { Link } from "../routes";
import web3 from "../ethereum/web3";
import bgImg from "../components/images/newestPic.jpg";
import Image from "next/image";
// import from './api/index.jsx';

class RecordIndex extends Component {
  // static async getInitialProps() {
  //   const records = await Record.methods.getRecord().call();

  //   return { records };
  // }

  state = {
    records: [],
    responseData: [],
  };

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    // console.log(accounts[0]);
    this.setState({
      records: await Record.methods.getPatient().call({ from: accounts[0] }),
    });

    // const recordArray = await Record.methods.getRecord().call();
    // //console.log(recordArray);

    // for (let key in recordArray) {
    //   // console.log(recordArray[key]);
    //   this.state.responseData.push(recordArray[key]);
    // }

    // const item = this.state.responseData.map((obj) => {
    //   return obj.patient;
    // });
    // console.log(item[0]);
  }

  // renderRecords() {
  //   const items = this.state.responseData.map((obj) => {
  //     return {
  //       header: "I am",
  //       description: "here",
  //     };
  //   });
  //   return <Card.Group items={items} />;
  // }

  renderPatient() {
    const items = this.state.records.map((address) => {
      return {
        header: address,
        description: (
          <Link route={`/show/${address}`}>
            <a>View Record</a>
          </Link>
        ),
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <div>
        {/* <div style={{}}>{this.renderPatient()}</div>
        <Link route="new">
          <Button primary icon="add circle" content="Create Record"></Button>
        </Link> */}
        {/* // style={{ */}
        {/* //   backgroundPositionX: "center",
          //   backgroundPositionY: "bottom",
          //   backgroundImage: `url(${bgImg})`,
          //   // backgroundColor: "grey",
          // }} */}

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
        <h1
          style={{
            fontFamily: "Algerian",
            fontSize: "100px",
            color: "honeydew",
            textAlign: "center",
            marginTop: "80px",
          }}
        >
          Blockchain Based Patient Record System
        </h1>
      </div>
    );
  }
}

export default RecordIndex;
