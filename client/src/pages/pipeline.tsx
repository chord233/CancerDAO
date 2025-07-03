import { PipelineBoard } from "@/components/pipeline-board";

export default function Pipeline() {
  return (
    <div className="flex-1 overflow-y-auto">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Sales Pipeline</h2>
            <p className="text-sm text-slate-500">Manage your deals and track their progress</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <PipelineBoard />
      </main>
    </div>
  );
}
