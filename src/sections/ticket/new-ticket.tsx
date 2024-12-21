import { PaperClipIcon } from '@/assets/icons';
import { useTranslations } from 'next-intl';
import React, { useRef, useState } from 'react';

interface NewTicketProps {
  handler: (value: string) => void;
}

export default function NewTicket({ handler }: NewTicketProps) {
  const t = useTranslations('Ticket.new-ticket');

  // States
  const fileInputRef = useRef<HTMLInputElement>(null); // Ref to open the file uploader
  const [fileError, setFileError] = useState<string | null>(null) // State for file error
  const [isCategoryOpen, setIsCategoryOpen] = useState(false); // State to toggle dropdown visibility
  const [subjectCharactersCount, setSubjectCharactersCount] = useState(0) // State to store subject characters count
  const [descriptionCharactersCount, setDescriptionCharactersCount] = useState(0) // State to store description characters count

  // handlers
  const toggleCategoryDropdown = () => {
    setIsCategoryOpen((prev) => !prev);
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      if (file.size > 26_214_400) {
        setFileError('Size')
        return;
      }
      if (!['image/png', 'image/jpg'].includes(file.type)) {
        setFileError('Format')
        return;
      }
      setFileError(null)
    }
  }

  return (
    <div className="max-w-[1200px] mx-auto p-20 flex flex-col gap-8">
      <div className="flex flex-col gap-6 border border-grayC rounded-lg p-6">
        {/* title */}
        <h2 className="text-2xl font-semibold">{t('mainTitle')}</h2>

        {/* subject */}
        <div className="flex flex-col gap-2">
          <h5>{t('title1')}</h5>
          <input
            onChange={e => setSubjectCharactersCount(e.target.value.length)}
            className="p-2 border border-grayC rounded-lg outline-none "
            type="text"
            placeholder={t('placeholder1')}
            maxLength={10}
          />
          <p className="text-blackC-light flex justify-end">{subjectCharactersCount}/10</p>
        </div>

        {/* category dropdown */}
        <div className="flex flex-col gap-2">
          <h5>{t('title2')}</h5>
          <div onClick={toggleCategoryDropdown} className="p-2 border border-grayC rounded-lg cursor-pointer hover:bg-slate-50 transition duration-200">
            <h6 className="text-blackC-light">{t('placeholder2')}</h6>
          </div>
          {/* Dropdown Content */}
          <div className={`overflow-hidden transition-all duration-300 ${isCategoryOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
            <div className="flex flex-col mt-2 gap-2 border border-grayC rounded-lg p-2">
              <div className="p-2 hover:bg-slate-100 rounded cursor-pointer">
                {t('category1')}
              </div>
              <div className="p-2 hover:bg-slate-100 rounded cursor-pointer">
                {t('category2')}
              </div>
              <div className="p-2 hover:bg-slate-100 rounded cursor-pointer">
                {t('category3')}
              </div>
              <div className="p-2 hover:bg-slate-100 rounded cursor-pointer">
                {t('category4')}
              </div>
              <div className="p-2 hover:bg-slate-100 rounded cursor-pointer">
                {t('category5')}
              </div>
            </div>
          </div>
        </div>

        {/* description */}
        <div className="flex flex-col gap-2">
          <h5>{t('title3')}</h5>
          <textarea
            onChange={e => setDescriptionCharactersCount(e.target.value.length)}
            className="p-4 border border-grayC rounded-lg h-32 outline-none "
            placeholder={t('placeholder3')}
            maxLength={1000}
          />
          <p className="text-blackC-light flex justify-end">{descriptionCharactersCount}/1000</p>
        </div>

        {/* image input */}
        <div className="flex flex-col gap-2">
          <h5>{t('title4')}</h5>
          <button
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
            className="p-2 border border-grayC rounded-lg flex items-center justify-between hover:bg-slate-50 transition duration-200"
          >
            <h6 className="text-blackC-light">{t('placeholder4')}</h6>
            <PaperClipIcon />
            <input onChange={handleFileChange} accept='.png, .jpg' type="file" className="hidden" ref={fileInputRef} />
          </button>
          <div className="flex items-center justify-between mt-3">
            <h6 className={`${fileError === 'Size' ? 'text-primary font-bold' : 'text-blackC-light'}`}>{t('imageSize')}</h6>
            <h6 className={`${fileError === 'Format' ? 'text-primary font-bold' : 'text-blackC-light'}`}>{t('imageExtension')}</h6>
          </div>
        </div>
      </div>
      <button onClick={() => handler('sendTicket')} className="rounded-lg bg-[#47C666] py-2 text-white">
        {t('button')}
      </button>
    </div>
  );
}
