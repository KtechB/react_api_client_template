import React, { useState } from "react";
import logo from "./logo.svg";
import { Tab } from "@headlessui/react";
import "./App.css";
import axios from "axios";
import Selector from "./Selecter";
import Button from "./components/Button";

function App() {
  const postApi = (URL: string) => {
    axios // axiosモジュールを使う
      .post(URL, {}, { headers: { "Content-type": "application/json " } }) // getメソッドを呼び出す
      .then((results) => {
        // レスポンスが来たらthenを実行
        console.log(results.data); // コンソールログにresultsに含まれるdataを表示
      })
      .catch((error) => {
        // 通信エラーが発生したら
        alert("通信失敗"); // ログに失敗と表示
        console.log(error.status); // エラーコードを表示
      });
  };
  const [selectorId, setSelectorId] = useState(0);

  return (
    <div className="App">
      <div className="max-w-screen-2xl  mx-auto border-b-2 py-2 md:py-4">
        <header className="flex justify-between items-center  px-4 md:px-8">
          <h2 className="text-3xl font-bold ">ApiCaller</h2>
        </header>
      </div>
      <main className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <Tab.Group>
          <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <Tab.List className="flex flex-wrap -mb-px">
              <Tab>
                {({ selected }) => (
                  <div
                    className={
                      selected
                        ? "inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600  dark:text-blue-500 dark:border-blue-500"
                        : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    }
                  >
                    Post
                  </div>
                )}
              </Tab>
              <Tab>
                {({ selected }) => (
                  <div
                    className={
                      selected
                        ? "inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
                        : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    }
                  >
                    Delete
                  </div>
                )}
              </Tab>

              <Tab>
                {({ selected }) => (
                  <div
                    className={
                      selected
                        ? "inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
                        : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    }
                  >
                    Tab 1
                  </div>
                )}
              </Tab>
            </Tab.List>
          </div>
          <Tab.Panels>
            <div className="py-4 px-4">
              <Tab.Panel>
                <div className="container mx-auto ">
                  <h2 className="text-3xl"> Post</h2>
                  <div className="container mx-auto py-2 ">
                    <input className="border-2 rounded-lg" value={"hoge"} />
                  </div>
                  <div className="container mx-auto py-2 ">
                    <Selector
                      options={["hoge", "huge"]}
                      selectedId={selectorId}
                      setSelectedId={setSelectorId}
                    />
                  </div>
                  <Button>Submit</Button>
                </div>
              </Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
            </div>
          </Tab.Panels>
        </Tab.Group>
      </main>
    </div>
  );
}

export default App;
