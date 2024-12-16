import { PaperClipIcon } from '@/assets/icons';
import { useTranslations } from 'next-intl';
import React, { useRef, useState } from 'react';

export default function NewTicket() {
  const t = useTranslations('Ticket.new-ticket');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [fileError, setFileError] = useState<string | null>(null)

  const [isCategoryOpen, setIsCategoryOpen] = useState(false); // State to toggle dropdown visibility

  const openUploader = () => {
    fileInputRef.current && fileInputRef.current.click(); // Ref to open the file uploader
  };

  const toggleCategoryDropdown = () => {
    setIsCategoryOpen((prev) => !prev);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {

      if (file.size > 26_214_400) {
        setFileError('File size must be less than 25MB.')
        return;
      }
      if (!['image/png', 'image/jpg'].includes(file.type)) {
        setFileError('File size must be less than 25MB.')
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
            className="p-2 border border-grayC rounded-lg"
            type="text"
            placeholder={t('placeholder1')}
            maxLength={10}
          />
          <p className="text-blackC-light flex justify-end">{0}/10</p>
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
            className="p-4 border border-grayC rounded-lg h-32"
            placeholder={t('placeholder3')}
            maxLength={1000}
          />
          <p className="text-blackC-light flex justify-end">{0}/1000</p>
        </div>

        {/* image */}
        <div className="flex flex-col gap-2">
          <h5>{t('title4')}</h5>
          <button
            onClick={openUploader}
            className="p-2 border border-grayC rounded-lg flex items-center justify-between hover:bg-slate-50 transition duration-200"
          >
            <h6 className="text-blackC-light">{t('placeholder4')}</h6>
            <PaperClipIcon />
            <input onChange={e => handleFileChange} accept='.png, .jpg' type="file" className="hidden" ref={fileInputRef} />
          </button>
          <div className="flex items-center justify-between text-blackC-light mt-3">
            <h6>{t('imageSize')}</h6>
            <h6>{t('imageExtension')}</h6>
          </div>
        </div>
      </div>
      <button className="rounded-lg bg-[#47C666] py-2 text-white">
        {t('button')}
      </button>
    </div>
  );
}
