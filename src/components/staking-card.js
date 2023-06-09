import classnames from "classnames";
import cardImage from "@/assets/placeholders/png.png";
import { Disclosure } from "@headlessui/react";
import StakeModal from "@/components/staking-modals/stake-modal";
import { useState } from "react";
import UntakeModal from "./staking-modals/unstake-modal";
import { DarkBackground } from "./ui";

export const StakingCard = ({ defaultOpen = false }) => {
  const [isStakeModalOpen, setIsStakeModalOpen] = useState(false);
  const [isUnstakeModalOpen, setIsUnstakeModalOpen] = useState(false);

  const onStakeModalClose = () => {
    setIsStakeModalOpen(false);
  };
  const onUnstakeModalClose = () => {
    setIsUnstakeModalOpen(false);
  };

  const onStake = () => {
    setIsStakeModalOpen(true);
  };
  const onUnstake = () => {
    setIsUnstakeModalOpen(true);
  };

  return (
    <>
      <StakeModal isOpen={isStakeModalOpen} onClose={onStakeModalClose} />

      <UntakeModal isOpen={isUnstakeModalOpen} onClose={onUnstakeModalClose} />
      <Disclosure defaultOpen={defaultOpen}>
        {({ open }) => (
          <div className="overflow-x-scroll scrollbar-hide w-full">
            <DarkBackground className="w-full rounded-lg overflow-x-scroll scrollbar-hide">
              <div className="p-3 px-5 w-full">
                <div className="flex justify-between">
                  <div className="flex items-center gap-2 w-[150px]">
                    <div className="relative rounded-full col-span-1">
                      <img
                        src={cardImage}
                        alt="pool logo"
                        className="object-cover w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full"
                      />
                    </div>
                    <div className="col-span-1">
                      <h3 className="font-semibold">Flexible</h3>
                    </div>
                  </div>

                  <div className="w-[calc(100%-200px)] grid self-center place-content-end tablet:place-content-stretch">
                    <div className="hidden tablet:flex justify-between">
                      <div className="w-36 inline-grid self-center place-content-center">
                        <h2 className="mb-3 text-center">Earned</h2>
                        <p className="font-semibold text-center">200 BTC</p>
                      </div>
                      <div className="w-36 inline-grid place-content-center">
                        <h3 className="mb-3">APR</h3>
                        <p className="font-semibold">5%</p>
                      </div>
                      <div className="w-36 inline-grid place-content-center">
                        <h3 className="mb-3">Lock-up term</h3>
                        <p className="font-semibold">None</p>
                      </div>
                      <div className="w-45 inline-grid place-content-center">
                        <h3 className="mb-3">Withdrawal delay time</h3>
                        <p className="font-semibold">8 days</p>
                      </div>

                      <div className="w-[60px] inline-grid place-content-center">
                        <Disclosure.Button>
                          <div className="flex items-center gap-1 text-cpink-100">
                            <p>{open ? "Hide" : "Details"}</p>

                            <span
                              className={classnames({
                                "rotate-180 transform": !open,
                              })}
                            >
                              <svg
                                width="14"
                                height="8"
                                viewBox="0 0 14 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7 0L13.0622 7.5H0.937822L7 0Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </div>
                        </Disclosure.Button>
                      </div>
                    </div>

                    <div className="w-[60px] inline-grid tablet:hidden place-content-center">
                      <Disclosure.Button>
                        <div className="flex items-center gap-1 text-cpink-100">
                          <p>{open ? "Hide" : "Details"}</p>

                          <span
                            className={classnames({
                              "rotate-180 transform": !open,
                            })}
                          >
                            <svg
                              width="14"
                              height="8"
                              viewBox="0 0 14 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 0L13.0622 7.5H0.937822L7 0Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </div>
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="py-2">
                  <div className="grid gap-2 border-t pt-3 mt-3 tablet:hidden">
                    <div className="md:flex justify-between">
                      <span className="flex justify-between md:grid">
                        <h2>Earned</h2>
                        <p className="font-semibold">200 BTC</p>
                      </span>
                      <span className="flex justify-between md:grid">
                        <h3>APR</h3>
                        <p className="font-semibold">5%</p>
                      </span>
                      <span className="flex justify-between md:grid">
                        <h3>Lock-up term</h3>
                        <p className="font-semibold">None</p>
                      </span>
                      <span className="flex justify-between md:grid">
                        <h3>Withdrawal delay time</h3>
                        <p className="font-semibold">8 days</p>
                      </span>
                    </div>
                  </div>
                  <div className="tablet:flex border-t mt-3 pt-3">
                    <div className="border-b tablet:border-b-0 pb-4 tablet:border-r pr-5 tablet:max-w-xl mt-3 tablet:w-full">
                      <div className="grid gap-2 md:grid-cols-12">
                        <div className="md:col-span-7 col-span-12">
                          <div className="flex justify-between md:grid grid-cols-12 gap-5 mb-3 md:mb-3">
                            <h2 className="whitespace-nowrap col-span-8">
                              Total pool amount
                            </h2>
                            <p className="font-semibold whitespace-nowrap col-span-4">
                              Unlimited
                            </p>
                          </div>
                          <div className="flex justify-between md:grid grid-cols-12 gap-5">
                            <h2 className="whitespace-nowrap col-span-8">
                              Stake amount (Min)
                            </h2>
                            <p className="font-semibold whitespace-nowrap col-span-4">
                              500 btc/1 person
                            </p>
                          </div>
                        </div>

                        <div className="md:col-span-5 col-span-12">
                          <div className="inline-grid md:place-content-end w-full">
                            <div className="flex justify-between md:w-45 md:inline-grid md:place-content-center">
                              <h3 className="md:mb-3">Recent BTC profit</h3>
                              <p className="font-semibold">200 BTC</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 flex md:justify-end">
                        <button className="rounded-md bg-[#077063] hover:bg-[#04544a] transition-all">
                          <span className="inline-block py-1 px-5 text-lg font-medium">
                            Claim token
                          </span>
                        </button>
                      </div>
                    </div>

                    <div className="tablet:px-5 mt-3 tablet:w-[20%] tablet:border-r tablet:border-b-0 border-b pb-4 ">
                      <div className="flex justify-between tablet:grid">
                        <h2 className="whitespace-nowrap tablet:mb-3">
                          Staking
                        </h2>
                        <p className="font-semibold whitespace-nowrap">
                          10000.20 BTC
                        </p>
                      </div>

                      <div className="mt-5 tablet:grid gap-3 flex">
                        <div className="inline-block w-[50%] tablet:w-full tablet:max-w-[130px]">
                          <button
                            className="rounded-md bg-cpink-100 w-full hover:bg-pink-600 transition-all"
                            onClick={onStake}
                          >
                            <span className="inline-block py-1 px-5 text-lg font-medium">
                              Stake
                            </span>
                          </button>
                        </div>
                        <div className="inline-block w-[50%] tablet:w-full tablet:max-w-[130px]">
                          <button
                            className="rounded-md bg-transparent border border-cpink-100 w-full hover:border-pink-600 transition-all"
                            onClick={onUnstake}
                          >
                            <span className="inline-block py-1 px-5 text-lg font-medium">
                              Unstake
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="tablet:pl-5 mt-3 tablet:w-[30%]">
                      <div className="w-full">
                        <h2 className="whitespace-nowrap mb-1 tablet:mb-3">
                          Unlock schedule
                        </h2>
                        <div className="flex justify-between">
                          <p className="text-xs tablet:text-sm">
                            25.03.2023 15.12 UTC
                          </p>
                          <p className="text-xs tablet:text-sm">10000.20 BTC</p>
                        </div>
                        <div className="mt-5 flex md:justify-end">
                          <button className="rounded-md bg-[#077063] hover:bg-[#04544a] transition-all">
                            <span className="inline-block py-1 px-5 text-lg font-medium">
                              Withdrawal
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Disclosure.Panel>
              </div>
            </DarkBackground>
          </div>
        )}
      </Disclosure>
    </>
  );
};
