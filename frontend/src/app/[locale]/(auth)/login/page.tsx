import SuspendedLoginForm from '@/app/[locale]/(auth)/login/_form-login';
import { createTranslation } from '@/libs/i18n/server';
import { getTranslations } from 'next-intl/server';

const LoginPage = async () => {
    const t = await getTranslations();
    const {ta} = await createTranslation('login');
    return (
        <div className="h-full w-full flex items-center justify-center bg-gray-100">
             <h1>{ta('page.title')}</h1>
            <div className="h-full w-full flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">{t('page.title')}</h1>
                <div className="text-left bg-white p-6 rounded-lg shadow-md  mx-auto">
                    <SuspendedLoginForm/>
                </div>
            </div>
        </div>
    );
};
export default LoginPage;
