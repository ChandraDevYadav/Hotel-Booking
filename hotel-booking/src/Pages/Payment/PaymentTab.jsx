import React, { useState } from "react";

export function PaymentTabs() {
  const [activeTab, setActiveTab] = useState("debit");

  return (
    <div className="w-full">
      {/* Tabs List */}
      <div className="flex gap-4 border-b">
        <button
          onClick={() => setActiveTab("debit")}
          className={` ${
            activeTab === "debit"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
        >
          Debit/Credit Card
        </button>
        <button
          onClick={() => setActiveTab("paypal")}
          className={` ${
            activeTab === "paypal"
              ? " text-blue-500"
              : "text-gray-500"
          }`}
        >
          Paypal
        </button>
        <button
          onClick={() => setActiveTab("monthly")}
          className={` ${
            activeTab === "monthly"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
        >
          Monthly Payment
        </button>
        <button
          onClick={() => setActiveTab("click")}
          className={` ${
            activeTab === "click"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
        >
          Click-to-Pay
        </button>
      </div>

      {/* Tabs Content */}
      <div className="mt-4">
        {activeTab === "debit" && (
          <div>
            <div className="flex justify-start items-center gap-4 mt-6">
              <div className="border w-10 h-6">
                <img src="/ae.svg" className="object-fill" alt="" />
              </div>
              <div className="border w-10 h-6">
                <img src="/dn.svg" className="object-fill" alt="" />
              </div>
              <div className="border w-10 h-6">
                <img src="/ds.svg" className="object-fill" alt="" />
              </div>
              <div className="border w-10 h-6">
                <img src="/jcb.svg" className="object-fill" alt="" />
              </div>
              <div className="border w-10 h-6">
                <img src="/mc.svg" className="object-fill" alt="" />
              </div>
              <div className="border w-10 h-6">
                <img src="/vi.svg" className="object-fill" alt="" />
              </div>
            </div>
            
            <form className="space-y-4 mt-4">
            <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-4 mt-4">
              <div className="mt-2">
                <label htmlFor="" className="text-sm">Name of card</label> <br />
                <input type="text" name="" id="" className="border border-gray-600 px-2 py-2 mt-2" />
              </div>
              <div className="">
                <label htmlFor="" className="text-sm">Debit / credit card Number</label> <br />
                <input type="text" name="" id="" placeholder="0000 0000 0000 0000" className="border border-gray-600 px-2 py-2 mt-2" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-6 mt-4">
              <div>
                <p>Security code</p>
                <input type="text" className="border border-gray-600 px-2 py-2 mt-2" />
              </div>
              <div>
                <p>Zip code</p>
                <input type="text" name="" id="" className="border border-gray-600 px-2 py-2 mt-2" />
              </div>
            </div>
            </form>
          </div>
        )}
        {activeTab === "paypal" && (
          <div>
            <h2 className="text-lg font-semibold">Paypal</h2>
            <p className="text-sm text-gray-500">
              Redirecting you to PayPal for secure payment.
            </p>
          </div>
        )}
        {activeTab === "monthly" && (
          <div>
            <h2 className="text-lg font-semibold">Monthly Payment</h2>
            <p className="text-sm text-gray-500">
              Choose a monthly installment plan that suits your needs.
            </p>
            <form className="space-y-4 mt-4">
              <div>
                <label className="block text-sm font-medium">
                  Installment Plan
                </label>
                <select className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500">
                  <option value="3-months">3 Months</option>
                  <option value="6-months">6 Months</option>
                  <option value="12-months">12 Months</option>
                </select>
              </div>
            </form>
          </div>
        )}
        {activeTab === "click" && (
          <div>
            <h2 className="text-lg font-semibold">Click-to-Pay</h2>
            <p className="text-sm text-gray-500">
              Quick and secure payments with Click-to-Pay.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
