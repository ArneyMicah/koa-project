import { HttpsProxyAgent } from 'https-proxy-agent';
import FormData from 'form-data';
import { Stream } from 'stream'; // Ensure Stream is imported

const proxyAgent = () => {
    return new HttpsProxyAgent({
        host: '127.0.0.1',
        port: 7890
    });
}

const createFormData = (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
        if (value instanceof Buffer || value instanceof Stream) {
            formData.append(key, value, { filename: value.filename || 'file' });
        } else {
            formData.append(key, value);
        }
    });
    return formData;
};

export {
    proxyAgent,
    createFormData
};
