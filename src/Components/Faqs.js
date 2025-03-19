import React  , {useState} from 'react'
import './Faqs.css';
import { Plus, Minus } from "lucide-react";

export default function Faqs() {


    const faqs = [
        {
          question: "What cryptocurrencies can I Buy IGO with?",
          answer: "Our website supports a wide range of cryptocurrencies, including Bitcoin (BTC), Ethereum (ETH), Ripple (XRP), Litecoin (LTC), and many others.",
        },
        {
          question: "When do I get my IGO token after buying it?",
          answer: "Your IGO tokens will be delivered to your wallet instantly after a successful purchase.",
        },
        {
          question: "What is the minimum amount I can Buy?",
          answer: "The minimum purchase amount is 10 IGO tokens.",
        },
        {
          question: "What customer support options are available?",
          answer: "We offer 24/7 customer support via live chat, email, and phone.",
        },
      ];
 
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <div className="faq-container">
    <h2 className="faq-title">FAQs</h2>
    <div className="faq-list">
      {faqs.map((faq, index) => (
        <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <span>{faq.question}</span>
            <button className="faq-toggle-btn">
              {openIndex === index ? <Minus /> : <Plus />}
            </button>
          </div>
          {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
  </div>
  )
}
