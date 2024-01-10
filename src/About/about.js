import React from "react";

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://st4.depositphotos.com/12981370/24312/i/450/depositphotos_243120806-stock-photo-programmer-working-software-development-coding.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            What is Crypto Cryptocurrencies and How they work ?
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Cryptocurrency is a digital payment system that doesn't rely on banks to verify
                            transactions. It’s a peer-to-peer system that can enable anyone anywhere to send
                            and receive payments. Instead of being physical money carried around and exchanged
                            in the real world, cryptocurrency payments exist purely as digital entries to an
                            online database describing specific transactions. When you transfer cryptocurrency
                            funds, the transactions are recorded in a public ledger. Cryptocurrency is stored in
                            digital wallets.Cryptocurrency received its name because it uses encryption to verify
                            transactions. This means advanced coding is involved in storing and transmitting cryptocurrency
                            data between wallets and to public ledgers. The aim of encryption is to provide security
                            and safety.The first cryptocurrency was Bitcoin, which was founded in 2009 and remains the
                            best known today. Much of the interest in cryptocurrencies is to trade for profit, with
                            speculators at times driving prices skyward.

                        </p>
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            How cryptocurrencies work ?
                        </h2>
                        <p className="mt-4 text-gray-600">
                            Cryptocurrencies run on a distributed public ledger called blockchain, a record of all transactions
                            updated and held by currency holders.
                            Units of cryptocurrency are created through a process called mining, which involves using computer 
                            power to solve complicated mathematical problems that generate coins. Users can also buy the currencies 
                            from brokers, then store and spend them using cryptographic wallets.
                            If you own cryptocurrency, you don’t own anything tangible. What you own is a key that allows you to move
                            a record or a unit of measure from one person to another without a trusted third party.
                            Although Bitcoin has been around since 2009, cryptocurrencies and applications of blockchain technology 
                            are still emerging in financial terms, and more uses are expected in the future. Transactions including 
                            bonds, stocks, and other financial assets could eventually be traded using the technology.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}