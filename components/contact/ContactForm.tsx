"use client"
import { Checkbox } from "@/components/ui/checkbox"
import { useForm, ValidationError } from '@formspree/react';
import { Button } from "../ui/button";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xpzvebrp");
  if (state.succeeded) {
      return <p className='pt-40 col-span-3 max-w-2xl text-3xl leading-10'>Merci pour votre message, nous nous engageons à vous répondre dans les plus brefs délais !</p>;
  }

  return (

      <form onSubmit={handleSubmit} className="devis__form opacity-0 col-span-3 max-w-2xl">
        <div className='flex flex-col sm:flex-row gap-10 mb-10'>
        <div>
          <div className='items-center bg-gradient-to-b from-[#76A042] to-[#76A042]/60 bg-clip-text not-italic text-transparent text-xl font-bold mb-2'>
            <label className="" htmlFor="name">
              Votre nom *
            </label>
          </div>
          <input
            className="border rounded w-full text-xl p-3 leading-tight placeholder-gray-500 custom-outline"
            type="text"
            id="name"
            name="name"
            placeholder="Michel Fontaine "
            required
            style={{borderColor: 'transparent'}}
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
        </div>

        <div>
          <div className='items-center bg-gradient-to-b from-[#76A042] to-[#76A042]/60 bg-clip-text not-italic text-transparent text-xl font-bold mb-2'>
            <label className="" htmlFor="email">
              Votre e-mail *
            </label>
          </div>
          <input
            className="border rounded w-full text-xl p-3 leading-tight placeholder-gray-500 custom-outline"
            type="email"
            id="email"
            name="email"
            placeholder="Votre e-mail *"
            required
            style={{borderColor: 'transparent'}}
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>
        </div>


<div className="flex flex-col sm:flex-row gap-10 mb-10">

<div>
    <div className=" items-center bg-gradient-to-b from-[#76A042] to-[#76A042]/60 bg-clip-text not-italic text-transparent text-xl font-bold mb-2">
      <label className="" htmlFor="phone">
        Votre téléphone *
      </label>
    </div>
    <input
      className="border rounded w-full text-xl p-3 leading-tight placeholder-gray-500 custom-outline"
      type="tel"
      id="phone"
      name="phone"
      placeholder="0692..."
      required
      pattern="[0-9]{10}"
      style={{borderColor: 'transparent'}}
    />
    <ValidationError 
      prefix="Phone" 
      field="phone"
      errors={state.errors}
    />
  </div>
        <div className="">
          
          <div className='items-center bg-gradient-to-b from-[#76A042] to-[#76A042]/60 bg-clip-text not-italic text-transparent text-xl font-bold mb-2'>
            <label className="" htmlFor="selectService">
            Votre besoin *
            </label>
          </div>

   
          <select
            className=" appearance-none rounded w-full text-xl p-3 leading-tight focus:outline-none focus:shadow-outline bg-white text-gray-500"
            required
            id="select"
            name="select"
          
          >
            <option value="">Dites Choisissez votre besoin</option>
            <option value="recherche-de-fuite">Recherche de fuite</option>
            <option value="travaux-toiture">Travaux de toiture</option>
            <option value="travaux-sinistre">Travaux après sinistre</option>
            <option value="ravalement-facade">Ravalement de façade</option>
            <option value="autre-demande">Autre demande</option>
          </select>
      
          <ValidationError 
            prefix="Select" 
            field="select"
            errors={state.errors}
          />
        </div>
    </div>
        <div className="mb-4">
          <div className='flex flex-row gap-10 items-center bg-gradient-to-b from-[#76A042] to-[#76A042]/60 bg-clip-text not-italic text-transparent text-xl font-bold mb-2'>
            <label className="" htmlFor="message">
              Votre message *
            </label>
          </div>
          <textarea
            className="border rounded w-full text-xl p-3 leading-tight placeholder-gray-500 custom-outline"
            rows={4}
            placeholder="J'ai une fuite d'eau dans ma maison, je n'arrive pas à déterminer l'origine."
            required
            style={{borderColor: 'transparent'}}
            id="message"
            name="message"
          ></textarea>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>

        <div className="items-top flex space-x-2 mt-6">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
        <p className="text-sm text-muted-foreground">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>

        <div className='flex flex-row-reverse mt-10'>
          <Button
            type="submit"
            disabled={state.submitting}
            className='border py-2 px-3 rounded-3xl text-xl font-bold'
          >
            Envoyer
          </Button>
        </div>
      </form>
  );
}
