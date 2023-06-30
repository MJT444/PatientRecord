import React, { Component } from "react";
import Layout from "../components/Layout";
import { Button, Card } from "semantic-ui-react";
import Record from "../ethereum/record";
import { Link, Router } from "../routes";
import web3 from "../ethereum/web3";
import bgImg from "../components/images/newestPic.jpg";
import Image from "next/image";

class RecordIndex extends Component {
  static async getInitialProps() {
    // const records = await Record.methods.getRecord().call();

    return {};
  }

  constructor() {
    super();
    this.state = {
      recordArray: [],
    };
  }

  async componentDidMount() {
    //   const accounts = await web3.eth.getAccounts();
    //   // console.log(accounts[0]);
    //   this.setState({
    //     records: await Record.methods.getPatient().call({ from: accounts[0] }),
    //   });

    this.setState({ recordArray: await Record.methods.getRecord().call() });
    console.log(this.state.recordArray);

    // for (let key in recordArray) {
    // // console.log(recordArray[key]);
    // this.state.responseData.push(recordArray[key]);
    // }

    // const item = this.state.responseData.map((obj) => {
    // return obj.patient;
    // });
    // console.log(item[0]);
  }

  renderRecords() {
    const obj = [];

    for (let key in this.state.recordArray) {
      obj.push(this.state.recordArray[key]);
    }

    console.log(obj);

    // const arr = [];

    // for (let key in obj) {
    //   arr.push(obj[key][0]);
    // }

    // console.log(arr);

    if (Object.keys(obj).length == 0) return;

    console.log(obj[0][1]);

    const items = obj.map((key) => {
      return {
        header: key[0][1],
        meta: key[0][2],
        description: (
          <Link route={`/show/${key[0][0]}`}>
            <Button primary disabled={!key[1]} floated="right">
              View
            </Button>
          </Link>
        ),
        fluid: true,
        style: { borderWidth: "20px" },
        color: "yellow",
      };
    });
    return <Card.Group style={{ marginTop: "50px" }} items={items} />;
  }

  //   renderPatient() {
  //     const items = this.state.records.map((address) => {
  //       return {
  //         header: address,
  //         description: (
  //           <Link route={`/show/${address}`}>
  //             <a>View Record</a>
  //           </Link>
  //         ),
  //         fluid: true,
  //       };
  //     });
  //     return <Card.Group items={items} />;
  //   }

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
        <div style={{ paddingLeft: "80px", paddingRight: "80px" }}>
          {this.renderRecords()}
        </div>
      </div>
    );
  }
}

export default RecordIndex;
