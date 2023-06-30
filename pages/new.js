import React, { Component } from "react";
import Layout from "../components/Layout";
import { Form, Button, Input, Message } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Record from "../ethereum/record";
import { Link, Router } from "../routes";
import bgImg from "../components/images/newestPic.jpg";
import Image from "next/image";

class NewRecord extends Component {
  state = {
    name: "",
    illness: "",
    bloodGroup: "",
    phoneNumber: "",
    errorMessage: "",
    provider: "",
  };

  onSubmit = async (event) => {
    event.preventDefault();
    console.log("here");
    try {
      console.log(web3);
      const accounts = await web3.eth.getAccounts();
      console.log(accounts[0]);
      await Record.methods
        .createRecord(
          this.state.name,
          this.state.illness,
          this.state.bloodGroup,
          this.state.phoneNumber,
          false
        )
        .send({
          from: accounts[0],
        });
      Router.pushRoute("/allRecord");
    } catch (error) {
      this.setState({ errorMessage: error });
      console.log(error);
    }
  };

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

        <Layout>
          {/* <h3 style={{ marginTop: "50px" }}>New Record</h3> */}
          <div
            style={{
              paddingTop: "20px",
              paddingLeft: "450px",
              paddingRight: "450px",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                backgroundColor: "gray",
              }}
            >
              New Record
            </h1>
          </div>
          <Form
            onSubmit={this.onSubmit}
            style={{
              padding: "10px",
              marginTop: "50px",
            }}
          >
            <Form.Field>
              <Input
                style={{ marginTop: "10px", marginBottom: "5px" }}
                label="name"
                placeholder="name"
                value={this.state.name}
                onChange={(event) => {
                  this.setState({ name: event.target.value });
                }}
              ></Input>
              <Input
                style={{ marginTop: "10px", marginBottom: "5px" }}
                label="illness"
                placeholder="illness"
                value={this.state.illness}
                onChange={(event) => {
                  this.setState({ illness: event.target.value });
                }}
              ></Input>
              <Input
                style={{ marginTop: "10px", marginBottom: "5px" }}
                label="Blood Group"
                placeholder="Blood Group"
                value={this.state.bloodGroup}
                onChange={(event) => {
                  this.setState({ bloodGroup: event.target.value });
                }}
              ></Input>
              <Input
                style={{ marginTop: "10px", marginBottom: "5px" }}
                label="Phone Number"
                placeholder="Phone Number"
                value={this.state.phoneNumber}
                onChange={(event) => {
                  this.setState({ phoneNumber: event.target.value });
                }}
              ></Input>
            </Form.Field>
            <Message
              error
              header="Oops!"
              content={this.state.errorMessage}
            ></Message>
            <Button primary content="Create" floated="right"></Button>
          </Form>
        </Layout>
      </div>
    );
  }
}

export default NewRecord;
