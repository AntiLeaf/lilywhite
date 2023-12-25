import React from "react";

import { Input, Button, Select, Modal } from "antd";

import { Email, Account } from "@/app/common/Types";

import { EmailContext } from "../components/inbox/EmailContext";

const Settings : React.FC = () => {
  const { addAccount, removeAccount, accounts } = React.useContext(EmailContext);
  if (addAccount === undefined || removeAccount === undefined || accounts === undefined) {
    console.log('addAccount, removeAccount, accounts 不能为 undefined')
  }

  const [newAccount, setNewAccount] = React.useState<string>("");
  const [accountToDelete, setAccountToDelete] = React.useState<string>("");

  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  return (
    <div className="w-full">
      <div className='flex flex-col'>
        <div className="w-1/2">
          <div className="flex flex-row m-2">
            <Input
              placeholder="someone@sample.com"
              allowClear
              onChange={(e) => { setNewAccount(e.target.value) }}
              value={newAccount}
            />
            
            <Button
              onClick={() => {
                console.log('newAccount = ', newAccount)
                addAccount(newAccount);
                setNewAccount("");
              }}
            >
              添加账户
            </Button>
          </div>

          <div className="flex flex-row m-2">
            <Select
              style={{ width: "100%" }}
              placeholder="Select a account"
              value={accountToDelete}
              options={accounts.map((account) => ({
                label: account.username,
                value: account.username,
              }))}
              onChange={(value: string) => {
                setAccountToDelete(value);
              }}
            />

            <Button
              onClick={() => { setModalOpen(true) }}
            >
              删除账户
            </Button>
          </div>
        </div>

        <Modal
          title="删除账户"
          open={modalOpen}
          onOk={() => {
            removeAccount(accountToDelete);
            setAccountToDelete("");
            setModalOpen(false);
          }}
          onCancel={() => {
            setAccountToDelete("");
            setModalOpen(false);
          }}
        >
          <p>确定删除账户 {accountToDelete} ？</p>
        </Modal>

      </div>
    </div>
  )
}

export default Settings
