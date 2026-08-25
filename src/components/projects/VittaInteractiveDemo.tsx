"use client";

import React, { useState } from "react";
import { Plus, RotateCcw, TrendingUp, TrendingDown, Sparkles } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface Transaction {
  id: string;
  description: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  date: string;
}

const initialTransactions: Transaction[] = [
  { id: "tx-1", description: "SaaS Client Subscription", amount: 45000, type: "income", category: "Revenue", date: "Today" },
  { id: "tx-2", description: "AWS Cloud Infrastructure", amount: 8200, type: "expense", category: "Hosting", date: "Yesterday" },
  { id: "tx-3", description: "Custom UI Design Retainer", amount: 35000, type: "income", category: "Services", date: "2 days ago" },
  { id: "tx-4", description: "Software Licenses & Tools", amount: 4500, type: "expense", category: "Software", date: "3 days ago" },
];

export function VittaInteractiveDemo() {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
  const [filter, setFilter] = useState<"all" | "income" | "expense">("all");
  const [newDesc, setNewDesc] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newType, setNewType] = useState<"income" | "expense">("income");
  const [newCategory, setNewCategory] = useState("Revenue");

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const netBalance = totalIncome - totalExpense;

  const handleAddTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDesc.trim() || !newAmount || isNaN(Number(newAmount))) return;

    const newTx: Transaction = {
      id: `tx-${Date.now()}`,
      description: newDesc.trim(),
      amount: Number(newAmount),
      type: newType,
      category: newCategory,
      date: "Just now",
    };

    setTransactions([newTx, ...transactions]);
    setNewDesc("");
    setNewAmount("");
  };

  const handleReset = () => {
    setTransactions(initialTransactions);
    setFilter("all");
  };

  const filteredTransactions = transactions.filter((t) => {
    if (filter === "all") return true;
    return t.type === filter;
  });

  return (
    <div className="bg-slate-900/95 dark:bg-slate-900/95 light:bg-white rounded-3xl border border-cyan-500/30 p-4 sm:p-6 shadow-2xl space-y-5 overflow-hidden w-full">
      {/* Simulation Banner */}
      <div className="flex flex-wrap items-center justify-between gap-2 bg-cyan-950/40 border border-cyan-500/30 rounded-xl px-3.5 py-2 text-xs font-mono text-cyan-300">
        <div className="flex items-center gap-2">
          <Sparkles size={14} className="text-cyan-400 shrink-0" />
          <span className="truncate">Live Vitta Financial Ledger Simulation</span>
        </div>
        <button
          onClick={handleReset}
          className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer text-[11px] shrink-0"
        >
          <RotateCcw size={12} /> Reset
        </button>
      </div>

      {/* Financial Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Net Balance */}
        <div className="bg-slate-950/90 dark:bg-slate-950/90 light:bg-slate-50 p-3.5 rounded-2xl border border-white/10">
          <div className="text-[11px] font-mono text-slate-400 mb-0.5">Net Cash Balance</div>
          <div className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900 font-mono">
            {formatCurrency(netBalance)}
          </div>
          <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-1">
            <TrendingUp size={11} /> Live Computed
          </div>
        </div>

        {/* Total Income */}
        <div className="bg-slate-950/90 dark:bg-slate-950/90 light:bg-slate-50 p-3.5 rounded-2xl border border-emerald-500/25">
          <div className="text-[11px] font-mono text-slate-400 mb-0.5">Total Income</div>
          <div className="text-lg sm:text-xl font-bold text-emerald-400 font-mono">
            {formatCurrency(totalIncome)}
          </div>
          <div className="text-[10px] text-slate-400 mt-1">
            {transactions.filter((t) => t.type === "income").length} Inflow items
          </div>
        </div>

        {/* Total Expense */}
        <div className="bg-slate-950/90 dark:bg-slate-950/90 light:bg-slate-50 p-3.5 rounded-2xl border border-rose-500/25">
          <div className="text-[11px] font-mono text-slate-400 mb-0.5">Total Expense</div>
          <div className="text-lg sm:text-xl font-bold text-rose-400 font-mono">
            {formatCurrency(totalExpense)}
          </div>
          <div className="text-[10px] text-slate-400 mt-1">
            {transactions.filter((t) => t.type === "expense").length} Outflow items
          </div>
        </div>
      </div>

      {/* Add Transaction Form - Responsive & Zero Overflow */}
      <form onSubmit={handleAddTransaction} className="bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50 p-3.5 rounded-2xl border border-white/10 space-y-2.5">
        <div className="text-xs font-mono font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
          Add Mock Transaction:
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap gap-2">
          <input
            type="text"
            placeholder="Description (e.g. Server Deposit)"
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
            className="flex-1 min-w-[140px] bg-slate-900 dark:bg-slate-900 light:bg-white border border-white/10 light:border-black/10 rounded-xl px-3 py-1.5 text-xs text-white dark:text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
          <input
            type="number"
            placeholder="Amount (₹)"
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
            className="w-full sm:w-28 bg-slate-900 dark:bg-slate-900 light:bg-white border border-white/10 light:border-black/10 rounded-xl px-3 py-1.5 text-xs text-white dark:text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
          <select
            value={newType}
            onChange={(e) => setNewType(e.target.value as "income" | "expense")}
            className="w-full sm:w-28 bg-slate-900 dark:bg-slate-900 light:bg-white border border-white/10 light:border-black/10 rounded-xl px-2 py-1.5 text-xs text-white dark:text-white light:text-slate-900 focus:outline-none focus:border-cyan-500 font-mono"
          >
            <option value="income">Income (+)</option>
            <option value="expense">Expense (-)</option>
          </select>
          <button
            type="submit"
            className="w-full sm:w-auto px-4 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer shadow-md shrink-0"
          >
            <Plus size={14} /> Add
          </button>
        </div>
      </form>

      {/* Transaction List & Filter Header */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <div className="text-xs font-mono font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 flex items-center gap-2">
            <span>Recent Ledger Transactions</span>
            <span className="px-2 py-0.5 rounded-full bg-slate-800 dark:bg-slate-800 light:bg-slate-200 text-[10px] text-slate-400">
              {filteredTransactions.length}
            </span>
          </div>

          <div className="flex items-center gap-1 bg-slate-950 dark:bg-slate-950 light:bg-slate-100 p-1 rounded-xl border border-white/10 text-[10px] font-mono">
            <button
              onClick={() => setFilter("all")}
              className={`px-2 py-0.5 rounded-lg cursor-pointer ${filter === "all" ? "bg-cyan-600 text-white font-semibold" : "text-slate-400 hover:text-white"}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("income")}
              className={`px-2 py-0.5 rounded-lg cursor-pointer ${filter === "income" ? "bg-emerald-600 text-white font-semibold" : "text-slate-400 hover:text-white"}`}
            >
              Income
            </button>
            <button
              onClick={() => setFilter("expense")}
              className={`px-2 py-0.5 rounded-lg cursor-pointer ${filter === "expense" ? "bg-rose-600 text-white font-semibold" : "text-slate-400 hover:text-white"}`}
            >
              Expense
            </button>
          </div>
        </div>

        {/* Table List */}
        <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
          {filteredTransactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 p-2 rounded-xl border border-white/5 text-xs"
            >
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded-lg ${tx.type === "income" ? "bg-emerald-500/15 text-emerald-400" : "bg-rose-500/15 text-rose-400"}`}>
                  {tx.type === "income" ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                </div>
                <div>
                  <div className="font-medium text-slate-200 dark:text-slate-200 light:text-slate-800 text-xs">{tx.description}</div>
                  <div className="text-[9px] text-slate-500 font-mono">{tx.category} • {tx.date}</div>
                </div>
              </div>

              <div className={`font-mono font-bold text-xs ${tx.type === "income" ? "text-emerald-400" : "text-rose-400"}`}>
                {tx.type === "income" ? "+" : "-"}{formatCurrency(tx.amount)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
