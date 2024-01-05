import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  url: string;
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
  sysPrompt: string;
  prefixPrompt: string;
  suffixPrompt: string;
}

export enum OpenAIModelID {
  Mistral = 'Mistral-Instruct',
  OpenChat = 'OpenChat-3.5-1210',
  DeepSeek = 'DeepSeek-coder-6.7B',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.Mistral;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.Mistral]: {
    url: '/completion',// if you have more than one server, you can config this like 'http://127.0.0.1:2992/completion'
    id: OpenAIModelID.Mistral,
    name: 'Mistral-Instruct',
    sysPrompt: '<s>',
    prefixPrompt: '[INST]',
    suffixPrompt: ' [/INST]',
    maxLength: 10000000,
    tokenLimit: 10000000,
  },
  [OpenAIModelID.OpenChat]: {
    url: '/completion',// if you have more than one server, you can config this like 'http://127.0.0.1:2992/completion'
    id: OpenAIModelID.OpenChat,
    name: 'OpenChat-3.5-1210',
    sysPrompt: '',
    prefixPrompt: 'GPT4 Correct User: ',
    suffixPrompt: '<|end_of_turn|>GPT4 Correct Assistant: ',
    maxLength: 10000000,
    tokenLimit: 10000000,
  },
  [OpenAIModelID.DeepSeek]: {
    url: '/completion',
    id: OpenAIModelID.DeepSeek,
    name: 'DeepSeek-coder-6.7B',
    sysPrompt: 'You are an AI programming assistant, utilizing the Deepseek Coder model, developed by Deepseek Company, and you only answer questions related to computer science. For politically sensitive questions, security and privacy issues, and other non-computer science questions, you will refuse to answer.\n',
    prefixPrompt: '### Instruction:\n',
    suffixPrompt: '\n### Response:\n',
    maxLength: 10000000,
    tokenLimit: 10000000,
  },
};
