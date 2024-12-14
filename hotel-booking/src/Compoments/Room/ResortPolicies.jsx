import React from 'react';
import { policies } from './policiesData';
import { paymentMethods } from './paymentMethods';

const ResortPolicies = () => {
  // Separate Check-in and Check-out policies
  const checkInPolicy = policies.find(policy => policy.category === 'Check-in');
  const checkOutPolicy = policies.find(policy => policy.category === 'Check-out');
  
  // Filter out Check-in and Check-out policies from the main policies array
  const otherPolicies = policies.filter(
    policy => policy.category !== 'Check-in' && policy.category !== 'Check-out'
  );

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 px-4'>
        <div>
            <p className='text-3xl font-semibold mb-4 md:mb-0 ml-0 md:ml-6'>Policies</p>
        </div>
        <div className="col-span-2 space-y-6">
      {/* Policies Section */}
      <div className="space-y-4">
        {/* Check-in and Check-out Policies in Flex divs */}
        <div className="flex justify-between space-x-4">
          {/* Check-in Policy */}
          {checkInPolicy && (
            <div className="w-1/2 space-y-4">
              <h2 className="text-xl font-semibold">Check-in</h2>
              <ul className="space-y-2 text-sm font-medium">
                {checkInPolicy.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Check-out Policy */}
          {checkOutPolicy && (
            <div className="w-1/2 space-y-4">
              <h2 className="text-xl font-semibold">Check-out</h2>
              <ul className="space-y-2 text-sm font-medium">
                {checkOutPolicy.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Remaining Policies */}
        {otherPolicies.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Other Policies</h2>
            {otherPolicies.map((policy, index) => (
              <div key={index}>
                <h3 className="text-lg font-medium mb-2">{policy.category}</h3>
                <ul className="space-y-2 text-sm font-medium">
                  {policy.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Payment Methods Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Accepted Payment Methods</h2>
        <div className="flex gap-4">
          {paymentMethods.map((method, index) => (
            <div key={index} className="flex items-center space-x-2">
              <img src={method.image} alt={method.name} className="w-20 h-16" />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default ResortPolicies;
