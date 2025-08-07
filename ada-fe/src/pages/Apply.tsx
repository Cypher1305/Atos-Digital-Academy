import React, { useState } from 'react';
import { Header } from "../partials/Header";
import { Footer } from "../partials/Footer";
import { TipsBar } from '../components/TipsBar';
import { normalize } from '../utils/Normalize';
import { PopUp } from '../components/PopUp';

export default function Apply () {
const [isOpen, setIsOpen] = useState(false);

const fullName = "Bénédicte YAO"; 
const email = "benedicte.yao@example.com";

const [formData, setFormData] = useState({
fullName,
email,
country: '',
city: '',
phone: '',
cv: null as File | null,
motivationLetter: '',
motivationFile: null as File | null,
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (files && files.length > 0) {
        setFormData(prev => ({ ...prev, [name]: files[0] }));
        }
        };

        const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const normalizedData = {
        ...formData,
        country: normalize(formData.country),
        city: normalize(formData.city),
        };

        
        console.log("Formulaire soumis avec :", normalizedData);
        alert("Candidature envoyée !");
        };

        return (
        <>
            <div className="text text-gray-500 min-h-screen flex flex-col justify-center items-center p-4 mx-auto sm:p-8 gap-5">
                <Header />
                <TipsBar
                    message="For all tech enthusiasts worldwide! Apply for ATOS cohorts in your country.No local program yet? You'll join our waitlist; and meanwhile, keep learning and growing online here."
                    type="warning" position="top" />
                <div className="w-full max-w-2xl mx-auto mt-10 p-6 shadow-md rounded-lg text-color">
                    <h2 className="text-2xl font-bold mb-6 mt-5 sm:top-14 text-center text-gray-400">Apply to join the community</h2>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium mb-1">Full Name</label>
                            <input type="text" name="fullName" value={formData.fullName} readOnly
                                className="w-[90%] p-3 border rounded-md cursor-not-allowed" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input type="email" name="email" value={formData.email} readOnly
                                className="w-[90%] p-3 border rounded-md cursor-not-allowed" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Pays</label>
                            <input type="text" name="country" value={formData.country} onChange={handleChange}
                                required className="w-[90%] p-3 border rounded-md" placeholder="Côte d’Ivoire" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Ville</label>
                            <input type="text" name="city" value={formData.city} onChange={handleChange} required
                                className="w-[90%] p-3 border rounded-md" placeholder="Abidjan" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Téléphone</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                                className="w-[90%] p-3 border rounded-md" placeholder="+225 07 07 07 07" />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">CV (PDF)</label>
                            <div className="w-[90%] border-2 border-dashed border-gray-300 rounded-md p-6 text-center hover:border-blue-500 transition cursor-pointer"
                                onDragOver={(e)=> e.preventDefault()}
                                onDrop={(e) => {
                                e.preventDefault();
                                handleFileChange(e); 
                                }}
                                >
                                <div className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 12V4m0 0l-4 4m4-4l4 4" />
                                    </svg>
                                </div>

                                <input type="file" name="cv" accept=".pdf" onChange={handleFileChange}
                                    className="hidden" id="cv-upload" />
                                <label htmlFor="cv-upload" className="cursor-pointer block text-gray-600">
                                    Drag & Drop here or <span className="text-blue-600 underline">Browse</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Cover letter (PDF)</label>
                            <div className="w-[90%] border-2 border-dashed border-gray-300 rounded-md p-6 text-center hover:border-blue-500 transition cursor-pointer"
                                onDragOver={(e)=> e.preventDefault()}
                                onDrop={(e) => {
                                e.preventDefault();
                                handleFileChange(e); 
                                }}
                                >
                                <div className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 12V4m0 0l-4 4m4-4l4 4" />
                                    </svg>
                                </div>

                                <input type="file" name="motivationFile" accept=".pdf" onChange={handleFileChange}
                                    className="hidden" id="motivation-upload" />
                                <label htmlFor="motivation-upload" className="cursor-pointer block text-gray-600">
                                    Drag & Drop here or <span className="text-blue-600 underline">Browse</span>
                                </label>
                            </div>

                            <p className="text-sm text-gray-500 mt-2 mb-1">or write here :</p>
                            <textarea name="motivationLetter" value={formData.motivationLetter} onChange={handleChange}
                                placeholder="Why do you want to join this training program, and what are your expectations?"
                                className="w-[90%] p-3 border rounded-md shadow-sm" rows={6} />
                        </div>

                        <button type="submit" className="bouton w-[90%] mb-9" onClick={() => setIsOpen(true)}>
                            Submit
                        </button>
                    </form>
                </div>
                <PopUp isOpen={isOpen} onClose={()=> setIsOpen(false)} title="Message">
                    <p>You'll join our waitlist; and meanwhile, keep learning and growing online here.</p>
                </PopUp>
                <Footer />
            </div>
        </>
        );
        };
