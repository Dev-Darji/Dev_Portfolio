"use client";

import React, { useState } from "react";
import { Users, Calendar, DollarSign, Clock, Mail, ShieldCheck, CheckCircle2 } from "lucide-react";

export function SuperworksExperienceCard() {
  const [activeTab, setActiveTab] = useState<"attendance" | "leave" | "payroll" | "expenses">("attendance");

  const modules = {
    attendance: {
      title: "Attendance & Clock-In Processing",
      description: "Real-time punch processing, daily shift logging, break tracking, and automated biometric sync API integration.",
      features: ["Clock-In / Clock-Out state machine", "Overtime calculation rules", "Biometric device API payloads"],
    },
    leave: {
      title: "Leave Approval Workflow Engine",
      description: "Multi-tier leave request routing, manager approval queues, annual leave quota calculations, and conflict detection.",
      features: ["Hierarchical manager approval logic", "Leave balance auto-deduction", "Email notification triggers"],
    },
    payroll: {
      title: "Enterprise Payroll & Salary Slips",
      description: "Monthly salary slip generation, tax deduction breakdowns, attendance-based salary calculations, and direct payout logs.",
      features: ["Attendance linked salary calculations", "Automated PDF slip rendering", "Expense claim auto-inclusion"],
    },
    expenses: {
      title: "Employee Expense Claims & Audits",
      description: "Expense submission forms, receipt upload verification, manager audit approvals, and finance integration.",
      features: ["Receipt image preview & verification", "Audit trail for financial transparency", "Reimbursement status updates"],
    },
  };

  return (
    <div className="bg-slate-900/90 rounded-2xl border border-purple-500/30 p-4 sm:p-6 shadow-2xl space-y-6">
      {/* Experience Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-mono mb-1">
            <ShieldCheck size={12} /> Professional Production Experience
          </div>
          <h3 className="text-xl font-bold text-white">Superworks — HRMS Engineering</h3>
          <p className="text-xs text-slate-400">Full Stack / MERN Developer (1+ Year Contribution)</p>
        </div>

        <div className="text-right">
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-white/10">
            Enterprise Workforce Platform
          </span>
        </div>
      </div>

      {/* HRMS Module Selector Tabs */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTab("attendance")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
            activeTab === "attendance" ? "bg-purple-600 text-white font-semibold" : "bg-slate-950 text-slate-400 hover:text-white"
          }`}
        >
          <Clock size={14} /> Attendance Module
        </button>
        <button
          onClick={() => setActiveTab("leave")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
            activeTab === "leave" ? "bg-purple-600 text-white font-semibold" : "bg-slate-950 text-slate-400 hover:text-white"
          }`}
        >
          <Calendar size={14} /> Leave Approvals
        </button>
        <button
          onClick={() => setActiveTab("payroll")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
            activeTab === "payroll" ? "bg-purple-600 text-white font-semibold" : "bg-slate-950 text-slate-400 hover:text-white"
          }`}
        >
          <DollarSign size={14} /> Payroll Engine
        </button>
        <button
          onClick={() => setActiveTab("expenses")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
            activeTab === "expenses" ? "bg-purple-600 text-white font-semibold" : "bg-slate-950 text-slate-400 hover:text-white"
          }`}
        >
          <Users size={14} /> Expense Claims
        </button>
      </div>

      {/* Tab Detail View */}
      <div className="bg-slate-950/80 p-4 rounded-xl border border-white/10 space-y-3">
        <h4 className="text-sm font-bold text-purple-300">{modules[activeTab].title}</h4>
        <p className="text-xs text-slate-300 leading-relaxed">{modules[activeTab].description}</p>
        
        <div className="pt-2 border-t border-white/10 space-y-1.5">
          <div className="text-[11px] font-mono text-slate-400">Dev Contribution Highlights:</div>
          {modules[activeTab].features.map((feat) => (
            <div key={feat} className="text-xs text-slate-200 flex items-center gap-2">
              <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Role Boundaries Clarity Note */}
      <div className="text-[11px] text-slate-400 italic bg-slate-950/40 p-3 rounded-lg border border-white/5">
        * Note: Represents 1+ year professional developer contribution as part of the Superworks engineering team, not independent ownership of the platform.
      </div>
    </div>
  );
}
