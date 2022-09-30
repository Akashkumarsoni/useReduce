import {
  TextField,
  Button,
  Card,
  Page,
  Layout,
  Heading,
  Checkbox,
  Stack,
  RadioButton,
  Modal,
  TextContainer,
} from "@shopify/polaris";
import { useState, useCallback, useReducer } from "react";
import "./App.css";

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SHOW":
        let mydata = state;
        mydata[action.fields] = action.data;
        return {
          ...mydata,
        };
      default:
        return { ...state };
    }
  };
  const initialstate = {
    title: "",
    desc: "",
    time: "",
    sku: "",
    cate: "",
    gst: false,
    img: "Accounts are disabled",
  };
  const [formdata, dispatch] = useReducer(reducer, initialstate);
  const onchange = (e, title) => {
    dispatch({
      type: "SHOW",
      data: e,
      fields: title,
    });
  };

  const [active, setActive] = useState(false);
  const handleChange = useCallback(() => setActive(!active), [active]);
  const activator = (
    <Button onClick={handleChange} destructive fullWidth>
      Show
    </Button>
  );
  return (
    <>
      <Page title="Data Form">
        <div className="App">
          <Page>
            <Card sectioned>
              <Layout>
                <Layout.Section>
                  <Heading>
                    Title
                    <sup style={{ color: "red" }}>*</sup>
                  </Heading>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                  </p>
                </Layout.Section>
                <Layout.Section secondary>
                  <Card sectioned>
                    <TextField
                      type="text"
                      value={formdata.title}
                      onChange={(e) => {
                        onchange(e, "title");
                      }}
                    />
                  </Card>
                </Layout.Section>
              </Layout>
            </Card>
            &nbsp;
            <Card sectioned>
              <Layout>
                <Layout.Section>
                  <Heading>
                    Description <sup style={{ color: "red" }}>*</sup>
                  </Heading>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                  </p>
                </Layout.Section>
                <Layout.Section secondary>
                  <Card sectioned>
                    <TextField
                      type="text"
                      value={formdata.desc}
                      onChange={(e) => {
                        onchange(e, "desc");
                      }}
                    />
                  </Card>
                </Layout.Section>
              </Layout>
            </Card>
            &nbsp;
            <Card sectioned>
              <Layout>
                <Layout.Section>
                  <Heading>
                    Handling Time <sup style={{ color: "red" }}>*</sup>
                  </Heading>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                  </p>
                </Layout.Section>
                <Layout.Section secondary>
                  <Card sectioned>
                    <TextField
                      type="text"
                      value={formdata.time}
                      onChange={(e) => {
                        onchange(e, "time");
                      }}
                    />
                  </Card>
                </Layout.Section>
              </Layout>
            </Card>
            &nbsp;
            <Card sectioned>
              <Layout>
                <Layout.Section>
                  <Heading>
                    Amazon Parent SKU <sup style={{ color: "red" }}>*</sup>
                  </Heading>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                  </p>
                </Layout.Section>
                <Layout.Section secondary>
                  <Card sectioned>
                    <TextField
                      type="text"
                      value={formdata.sku}
                      onChange={(e) => {
                        onchange(e, "sku");
                      }}
                    />
                  </Card>
                </Layout.Section>
              </Layout>
            </Card>
            &nbsp;
            <Card sectioned>
              <Layout>
                <Layout.Section>
                  <Heading>
                    Barcode/GSTIN <sup style={{ color: "red" }}>*</sup>
                  </Heading>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                  </p>
                </Layout.Section>
                <Layout.Section secondary>
                  <Card sectioned>
                    <Checkbox
                      label="Barcode/GSTIN Exemption"
                      checked={formdata.gst}
                      onChange={(e)=>{onchange(e,"gst")}}
                      
                    />
                  </Card>
                </Layout.Section>
              </Layout>
            </Card>
            &nbsp;
            <Card sectioned>
              <Layout>
                <Layout.Section>
                  <Heading>
                    Amazon Category <sup style={{ color: "red" }}>*</sup>
                  </Heading>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                  </p>
                </Layout.Section>
                <Layout.Section secondary>
                  <Card sectioned>
                    <TextField
                      type="text"
                      value={formdata.cate}
                      onChange={(e) => {
                        onchange(e, "cate");
                      }}
                    />
                  </Card>
                </Layout.Section>
              </Layout>
            </Card>
            &nbsp;
            <Card sectioned>
              <Layout>
                <Layout.Section>
                  <Heading>
                    Image Section <sup style={{ color: "red" }}>*</sup>
                  </Heading>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                  </p>
                </Layout.Section>
                <Layout.Section secondary>
                  <Card sectioned>
                    <Stack vertical>
                      <RadioButton
                        label="Accounts are disabled"
                        id="disabled"
                        name="accounts"
                        onChange={() => {
                          onchange("Accounts are disabled", "img");
                        }}
                      />
                      <RadioButton
                        label="Accounts are optional"
                        id="optional"
                        name="accounts"
                        onChange={() => {
                          onchange("Accounts are optional", "img");
                        }}
                      />
                    </Stack>
                  </Card>
                </Layout.Section>
              </Layout>
            </Card>
            &nbsp;
            <Card>
              <div>
                <Modal
                  activator={activator}
                  open={active}
                  onClose={handleChange}
                  title="User Data"
                  primaryAction={{
                    content: "Close",
                    onAction: handleChange,
                  }}
                >
                  <Modal.Section>
                    <TextContainer>
                      <Layout>
                        <Layout.Section>
                          <div className="">
                            <Heading>
                              Title <b style={{ color: "red" }}>:</b>{" "}
                              {formdata.title}
                            </Heading>

                            <Heading>
                              Description <b style={{ color: "red" }}>:</b>{" "}
                              {formdata.desc}
                            </Heading>

                            <Heading>
                              Handling Time <b style={{ color: "red" }}>:</b>{" "}
                              {formdata.time}
                            </Heading>

                            <Heading>
                              SKU <b style={{ color: "red" }}>:</b>{" "}
                              {formdata.sku}
                            </Heading>

                            <Heading>
                              GSTIN <b style={{ color: "red" }}>:</b>{" "}
                              {formdata.gst?'True':'False'}
                            </Heading>

                            <Heading>
                              Amazon Category <b style={{ color: "red" }}>:</b>{" "}
                              {formdata.cate}
                            </Heading>

                            <Heading>
                              Image <b style={{ color: "red" }}>:</b>{" "}
                              {formdata.img}
                            </Heading>
                          </div>
                        </Layout.Section>
                      </Layout>
                    </TextContainer>
                  </Modal.Section>
                </Modal>
              </div>
            </Card>
          </Page>
        </div>
      </Page>
    </>
  );
}

export default App;
