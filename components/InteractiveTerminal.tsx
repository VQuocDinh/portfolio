import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface CommandOutput {
  id: string;
  type: 'input' | 'output' | 'error' | 'system';
  content: React.ReactNode;
}

const InteractiveTerminal: React.FC = () => {
  const { messages } = useLanguage();
  const h = messages.hero;

  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      id: 'init-1',
      type: 'system',
      content: (
        <div className="text-apple-tertiary mb-2">
          VQD Terminal v1.0.0
          <br />
          Type <span className="text-emerald-500">help</span> to see available commands.
        </div>
      ),
    },
    {
      id: 'init-2',
      type: 'output',
      content: (
        <div>
          <span className="text-purple-500 dark:text-purple-400">const</span> <span className="text-blue-500 dark:text-blue-400">developer</span> = {'{'}
          <br />
          &nbsp;&nbsp;name: <span className="text-emerald-600 dark:text-emerald-400">&apos;{h.name}&apos;</span>,<br />
          &nbsp;&nbsp;role: <span className="text-emerald-600 dark:text-emerald-400">&apos;Fullstack&apos;</span>,<br />
          &nbsp;&nbsp;stack: [<span className="text-emerald-600 dark:text-emerald-400">&apos;React&apos;</span>, <span className="text-emerald-600 dark:text-emerald-400">&apos;NestJS&apos;</span>],<br />
          &nbsp;&nbsp;hardWorker: <span className="text-orange-500 dark:text-orange-400">true</span>,<br />
          &nbsp;&nbsp;passion: <span className="text-orange-500 dark:text-orange-400">Infinity</span>
          <br />
          {'}'};
        </div>
      ),
    }
  ]);

  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when history changes
  useEffect(() => {
    if (terminalBodyRef.current) {
      // Small timeout to allow Framer Motion layout to run before measuring height
      setTimeout(() => {
        if (terminalBodyRef.current) {
          terminalBodyRef.current.scrollTo({
            top: terminalBodyRef.current.scrollHeight,
            behavior: 'smooth'
          });
        }
      }, 50);
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    // Add input to history
    const newHistory: CommandOutput[] = [
      ...history,
      { id: Date.now().toString(), type: 'input', content: cmd }
    ];

    let output: React.ReactNode = '';
    let isError = false;

    switch (trimmedCmd) {
      case 'help':
        output = (
          <div className="space-y-1">
            <div><span className="text-blue-400 w-16 inline-block">about</span> - Who am I?</div>
            <div><span className="text-blue-400 w-16 inline-block">skills</span> - List core technologies</div>
            <div><span className="text-blue-400 w-16 inline-block">contact</span> - How to reach me</div>
            <div><span className="text-blue-400 w-16 inline-block">clear</span> - Clear terminal</div>
            <div><span className="text-blue-400 w-16 inline-block">sudo</span> - ???</div>
          </div>
        );
        break;
      case 'about':
        output = `${h.intro}`;
        break;
      case 'skills':
        output = 'React, Next.js, TypeScript, TailwindCSS, NestJS, Node.js, PostgreSQL, Prisma, Vite';
        break;
      case 'contact':
        output = (
          <div>
            Email: <a href="mailto:vqdinh2202@gmail.com" className="text-blue-400 hover:underline">vqdinh2202@gmail.com</a><br />
            GitHub: <a href="https://github.com/VQuocDinh" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">github.com/VQuocDinh</a><br />
            LinkedIn: <a href="https://linkedin.com/in/voquocdinh" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">linkedin.com/in/voquocdinh</a>
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'sudo':
        output = 'Nice try! But you are not in the sudoers file. This incident will be reported. 🚨';
        isError = true;
        break;
      case '':
        return; // Do nothing on empty enter
      default:
        output = `Command not found: ${trimmedCmd}. Type 'help' to see available commands.`;
        isError = true;
    }

    newHistory.push({
      id: (Date.now() + 1).toString(),
      type: isError ? 'error' : 'output',
      content: output
    });

    setHistory(newHistory);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  return (
    <div
      className="absolute inset-0 rounded-3xl code-window bg-apple-bg flex flex-col overflow-hidden group cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-apple-border/25 neu-inset-sm bg-apple-muted/50 shrink-0">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57] ring-1 ring-black/5" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e] ring-1 ring-black/5" />
          <div className="w-3 h-3 rounded-full bg-[#28c840] ring-1 ring-black/5" />
        </div>
        <div className="flex-1 flex justify-center">
          <span className="text-apple-tertiary text-[11px] font-mono tracking-tight flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
            <span>bash</span>
            <span>—</span>
            <span>interactive</span>
          </span>
        </div>
      </div>

      {/* Terminal Body */}
      <div
        ref={terminalBodyRef}
        className="p-5 font-mono text-[11px] sm:text-xs md:text-sm leading-relaxed text-left flex-1 bg-apple-muted/40 overflow-y-auto no-scrollbar"
      >
        <AnimatePresence initial={false}>
          {history.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-3"
            >
              {item.type === 'input' && (
                <div className="flex gap-2 text-apple-text">
                  <span className="text-emerald-500 shrink-0">guest@vqdinh:~$</span>
                  <span>{item.content}</span>
                </div>
              )}
              {item.type === 'output' && (
                <div className="text-apple-secondary">{item.content}</div>
              )}
              {item.type === 'error' && (
                <div className="text-red-400">{item.content}</div>
              )}
              {item.type === 'system' && (
                <div>{item.content}</div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Input Line */}
        <form onSubmit={onSubmit} className="flex gap-2 text-apple-text mt-2 pb-4">
          <span className="text-emerald-500 shrink-0">guest@vqdinh:~$</span>
          <div className="relative flex-1">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full bg-transparent outline-none border-none text-apple-text font-mono p-0 m-0 caret-transparent"
              spellCheck="false"
              autoComplete="off"
            />
            {/* Custom blinking cursor to look like a terminal block cursor */}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="absolute top-0 bottom-0 w-2.5 bg-apple-text/80 pointer-events-none"
              style={{
                left: `calc(${input.length}ch)`,
                display: 'inline-block'
              }}
              aria-hidden
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default InteractiveTerminal;
