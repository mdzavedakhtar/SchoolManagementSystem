import React, { useState } from 'react';
import { INSTITUTION_INFO } from '../data/institutionData';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Send, CheckCircle2, User, Phone, MessageSquare, AlertCircle } from 'lucide-react';

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  studentClass: string;
  interestedIn: string;
  medium: string;
  message: string;
}

export const EnquiryFormSection: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    studentClass: '',
    interestedIn: '',
    medium: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number';
    }

    if (!formData.studentClass.trim()) {
      newErrors.studentClass = 'Please select or specify student class';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof EnquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Abstracted service call simulation (wiring to REST/Webhook API ready)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Submitted Enquiry Payload:', formData);
                      setIsSuccess(true);
      setFormData({
        fullName: '',
        phone: '',
        studentClass: '',
        interestedIn: '',
        medium: '',
        message: ''
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="enquire" className="py-20 lg:py-28 bg-bgLight relative">
      <Container size="default">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Desk Info */}
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="gold">
              Direct Desk Enquiry
            </Badge>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy-900 leading-tight">
              Send Your Admission Enquiry
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Have questions about class batches, subjects, medium of instruction, or Polytechnic / Paramedical exam prep? Submit your details below and our team will get in touch.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
              <a href={`tel:${INSTITUTION_INFO.contactNumber}`} className="flex items-center gap-3 group">
                <div className="p-2.5 rounded-xl bg-gold-100 text-gold-700 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold">Direct Call Desk</p>
                  <p className="text-base font-bold text-navy-900 group-hover:text-academic-800 transition-colors">{INSTITUTION_INFO.contactNumber}</p>
                </div>
              </a>

              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold">Instant WhatsApp</p>
                  <p className="text-base font-bold text-navy-900 group-hover:text-emerald-600 transition-colors">+91 {INSTITUTION_INFO.contactNumber}</p>
                </div>
              </a>
            </div>

            <div className="text-xs text-slate-500 space-y-1">
              <p>• {INSTITUTION_INFO.schoolName} (CBSE Pattern • Nursery to VIII)</p>
              <p>• {INSTITUTION_INFO.coachingName} (Nursery to XII & Competitive)</p>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <Card className="p-8 sm:p-10 shadow-2xl relative">
              {isSuccess ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold font-heading text-navy-900">
                    Enquiry Submitted Successfully!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you for your interest in MG Oriental School & New Era Coaching Centre. Our counselling desk will call you shortly.
                  </p>
                  <Button variant="gold" size="md" onClick={() => setIsSuccess(false)}>
                    Submit Another Enquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold font-heading text-navy-900 pb-2 border-b border-slate-100">
                    Admission & Batch Enquiry Form
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Student or Parent Name"
                          className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border ${
                            errors.fullName ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-academic-200'
                          } focus:outline-none focus:ring-2`}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="10-Digit Mobile Number"
                          className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border ${
                            errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-academic-200'
                          } focus:outline-none focus:ring-2`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {/* Student Class */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Student Class *
                      </label>
                      <input
                        type="text"
                        name="studentClass"
                        value={formData.studentClass}
                        onChange={handleChange}
                        placeholder="Select Class"
                        className={`w-full px-4 py-2.5 text-sm rounded-xl border ${
                          errors.studentClass ? 'border-red-500' : 'border-slate-300'
                        } focus:outline-none focus:ring-2 focus:ring-academic-200`}
                      />
                      {errors.studentClass && (
                        <p className="text-xs text-red-500 mt-1">{errors.studentClass}</p>
                      )}
                    </div>

                    {/* Interested In */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Interested In *
                      </label>
                      <select
                        name="interestedIn"
                        value={formData.interestedIn}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-academic-200"
                      >
                        <option value="">Select Interest</option>
                        <option value="School">School (MG Oriental)</option>
                        <option value="Coaching">Coaching (New Era)</option>
                        <option value="Polytechnic">Polytechnic Prep</option>
                        <option value="Paramedical">Paramedical Prep</option>
                      </select>
                    </div>

                    {/* Medium */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Medium *
                      </label>
                      <select
                        name="medium"
                        value={formData.medium}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-academic-200"
                      >
                        <option value="">Select Medium</option>
                        <option value="English">English Medium</option>
                        <option value="Hindi">Hindi Medium</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Message / Specific Question (Optional)
                    </label>
                    <textarea
                      rows={3}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any specific questions regarding admission or stream selection..."
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-academic-200"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    isLoading={isSubmitting}
                    rightIcon={<Send className="w-4 h-4" />}
                    className="w-full justify-center font-bold"
                  >
                    Submit Admission Enquiry
                  </Button>
                </form>
              )}
            </Card>
          </div>

        </div>

      </Container>
    </section>
  );
};
